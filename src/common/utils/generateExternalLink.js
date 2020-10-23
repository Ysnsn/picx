const generateExternalLink = (type, content, config) => {
  switch (type) {
    case 'github':
      return content['download_url']

    case 'cdn':
      return `https://cdn.jsdelivr.net/gh/${config.owner}/${config.selectedRepos}@${config.selectedBranch}/${content['path']}`
  }
}

export default generateExternalLink
