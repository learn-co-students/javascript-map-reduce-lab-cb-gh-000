

var issuesWithUpdatedApiUrl = issues.map(issue =>{
  var newUrl = issue.url.replace("api.github.com", "api-v2.github.com")
  return Object.assign({}, issue, {url: newUrl})
})

issuesWithUpdatedApiUrl.forEach(issue =>{
  //console.log(issue.url)
})

var commentCountAcrossIssues = issues.map(issue =>{
  return issue.comments_count
})

commentCountAcrossIssues = commentCountAcrossIssues.reduce((val, is) => {return val += is}, 0)
console.log(commentCountAcrossIssues)

function getOpenIssues(val, is)
{
  console.log(state)
  if(is.state == 'open')
  {
    val = Object.assign({}, val, )
  }

  return val
}
var openIssues = issues.reduce(getOpenIssues, [])
console.log(openIssues)
