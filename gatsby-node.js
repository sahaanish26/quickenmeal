const path = require("path");
const _ = require("lodash");
const moment = require("moment");
const siteConfig = require("./data/SiteConfig");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  let slug;
  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);
    if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "title")
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`;
    } else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === "") {
      slug = `/${parsedFilePath.name}/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }

    if (Object.prototype.hasOwnProperty.call(node, "frontmatter")) {
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, "slug"))
        slug = `/${_.kebabCase(node.frontmatter.slug)}`;
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, "date")) {
        const date = moment(node.frontmatter.date, siteConfig.dateFromFormat);
        if (!date.isValid)
          console.warn(`WARNING: Invalid date.`, node.frontmatter);

        createNodeField({
          node,
          name: "date",
          value: date.toISOString()
        });
      }
    }
    createNodeField({ node, name: "slug", value: slug });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postPage = path.resolve("src/templates/post.jsx");
  const tagPage = path.resolve("src/templates/tag.jsx");
  const categoryPage = path.resolve("src/templates/category.jsx");

  const markdownQueryResult = await graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                tags
                category
                date
                description
              }
            }
          }
        }
      }
    `
  );

  if (markdownQueryResult.errors) {
    console.error(markdownQueryResult.errors);
    throw markdownQueryResult.errors;
  }

  //This Set contains the unique tags (since tags can be same across multiple posts)
  const tagSet = new Set();
  //This map contains the occurence number of each tag across all posts.Since page numbers for each tag will be based on the number of
  // posts having the tag
  const tagMap = new Map();
  //Same reason as tags
  const categorySet = new Set();

  //Same reason as tags
  const categoryMap = new Map();

  const postsEdges = markdownQueryResult.data.allMarkdownRemark.edges;

  postsEdges.sort((postA, postB) => {
    const dateA = moment(
      postA.node.frontmatter.date,
      siteConfig.dateFromFormat
    );

    const dateB = moment(
      postB.node.frontmatter.date,
      siteConfig.dateFromFormat
    );

    if (dateA.isBefore(dateB)) return 1;
    if (dateB.isBefore(dateA)) return -1;

    return 0;
  });

  postsEdges.forEach((edge, index) => {
    if (edge.node.frontmatter.tags) {
      edge.node.frontmatter.tags.forEach(tag => {

        tagSet.add(tag);
        if(tagMap.has(tag)){
        tagMap.set(tag,tagMap.get(tag)+1);
        }
        else{tagMap.set(tag,1);}


      });
    }


    if (edge.node.frontmatter.category) {
      categorySet.add(edge.node.frontmatter.category);
    }

    const nextID = index + 1 < postsEdges.length ? index + 1 : 0;
    const prevID = index - 1 >= 0 ? index - 1 : postsEdges.length - 1;
    const nextEdge = postsEdges[nextID];
    const prevEdge = postsEdges[prevID];

    createPage({
      path: edge.node.fields.slug,
      component: postPage,
      context: {
        slug: edge.node.fields.slug,
        nexttitle: nextEdge.node.frontmatter.title,
        nextslug: nextEdge.node.fields.slug,
        prevtitle: prevEdge.node.frontmatter.title,
        prevslug: prevEdge.node.fields.slug
      }
    });
  });
  console.log(tagMap);

  tagSet.forEach(tag => {
    const postsPerPage = siteConfig.postsPerPage;
    //getting the pages from tagmap and not from number of posts. Since posts under each tag need to be paginated.
    const numPages = Math.ceil(tagMap.get(tag) / postsPerPage);
    const tagBasePath = `/tags/${_.kebabCase(tag)}/`;
    console.log(tag +":"+ numPages);
    Array.from({ length: numPages }).forEach((_, i) => {
      /*The path for each page will be /<number>, with an exception for /0, that page will use / instead.*/
      const tagSubPath = i === 0 ? `` : `${i+1}` ;
      createPage({
        path: tagBasePath + tagSubPath,
        component: tagPage,
        context: {
          tag,
          tagBasePath,
          limit:postsPerPage,
          skip: i * postsPerPage,
          numberOfPages: numPages,
          currentPage: i +1 ,

        }
      });

    });
  });

  categorySet.forEach(category => {
    createPage({
      path: `/categories/${_.kebabCase(category)}/`,
      component: categoryPage,
      context: {
        category
      }
    });
  });
};
