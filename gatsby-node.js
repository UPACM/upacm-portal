const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const webp = require('webp-converter');
const Jimp = require('jimp');
const fs = require('fs');
const sizeOf = require('image-size');

webp.grant_permission();

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `src` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}


var featuredEventsDir = './static/events-images/featured/';

var featuredEvents = fs.readdirSync(featuredEventsDir);
console.log(featuredEvents);
featuredEvents.forEach((webpImage, index) => {
  if(webpImage == "jpg"){
    return;
  }
  var result = webp.dwebp(featuredEventsDir + webpImage,featuredEventsDir + "jpg/"+ webpImage + ".jpg","-o");
  result.then((response) => {
    console.log(response);
  });
});

featuredEvents = fs.readdirSync(featuredEventsDir + "jpg/");
featuredEvents.forEach((jpgImage, index) => {
  Jimp.read(featuredEventsDir + "jpg/" + jpgImage, (err, img) => {
    if (err) throw err;
    var imgPath = featuredEventsDir + "jpg/" + jpgImage;
    var dimensions = sizeOf(imgPath);
    console.log("Resized image!");
    img
      .resize(dimensions.width/4, dimensions.height/4) // resize
      .write(imgPath); // save
  });
});
/*

*/
