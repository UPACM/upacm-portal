import React from "react"
import { Helmet } from "react-helmet"
/*
sitePage: page directory of the site, e.g. "/2021/Live"
*/
export default function SiteMeta({ pageName, sitePage, isIndex }) {
  var titleTag = <title>{pageName} - UP ACM</title>
  if (isIndex) {
    titleTag = (
      <title>UP ACM - Building communities to develop the future</title>
    )
  }
  return (
    <Helmet htmlAttributes={{
		lang: 'en',
	  }}>
      <meta charSet="utf-8" />
      {titleTag}
      <link rel="canonical" href={"https://upacmportalmaster.gatsbyjs.io" + sitePage} />
      <meta
        name="Description"
        content="We envision a world where computing stands at the forefront of development - where we are able to use our skills to address the problems of tomorrow and create a positive impact on the community at large."
      />
    </Helmet>
  )
}
