const setupGitOnLinux = () => {
  return (
    <div className="page">
      <div className="header">
        <h1>Setting Up Git On Linux</h1>
        <p><em>Installing Git and getting the SSH key after a fresh installation of Linux</em></p>
        <hr/>
      </div>
      <p>Any time you want to install something on linux it is smart update apt first.</p>
      <div className="snippet-container">
        <pre>
          sudo apt-get update
          sudo apt-get upgrade
        </pre>
      </div>
      <p>Install git, generate your ssh key, and then copy the key to your clipboard</p>
      <div className="snippet-container">
        <pre>
          sudo apt-get install git
          ssh-keygen -t ed25519 -C "key name"
          sudo apt-get install xclip
          xclip -sel clip &lt; ~/.ssh/id_ed25519.pub
        </pre>
      </div>
      <p>For GitHub, go to Settings&gt;"SSH and GPG keys" and then click "New SSH key"</p>
      <p>For GitLab, go to Preferences&gt;"SSH Keys" then click "Add new key"</p>
    </div>
  )
}
export default setupGitOnLinux;