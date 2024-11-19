const VimCheatSheet = () => {
  return (
    <div className="page">
      <div className="header">
        <h1>Vim & Bash Cheat Sheet</h1>
        <p><em>Useful shortcuts in vim and bash commands I use for ssh, and moving files.</em></p>
        <hr />
      </div>
      <p>larger vim cheat sheet at <a href="https://vim.rtorr.com/">vim.rtorr.com</a></p>
      <h3>Vim Shortcuts</h3>
          <table>
            <tr>
              <th>Shortcut</th>
              <th>Action</th>
            </tr>
            <tr>
              <td><code>:x</code></td>
              <td>save and quit</td>
            </tr>
            <tr>
              <td><code>:w</code></td>
              <td>write, or save</td>
            </tr>
            <tr>
              <td><code>:q!</code></td>
              <td>force quit without saving</td>
            </tr>
            <tr>
              <td><code>i</code></td>
              <td>edit mode</td>
            </tr>
            <tr>
              <td><code>escape</code></td>
              <td>exit edit mode</td>
            </tr>
            <tr>
              <td><code>A</code></td>
              <td>go to the end of the line and swith to edit mode</td>
            </tr>
            <tr>
              <td><code>I</code></td>
              <td>go to the beginning of the line and swith to edit mode</td>
            </tr>
            <tr>
              <td><code>k and j</code></td>
              <td>up and down, respectively</td>
            </tr>
            <tr>
              <td><code>h and l</code></td>
              <td>move one space to the left and right, respectively</td>
            </tr>
            <tr>
              <td><code>w and b</code></td>
              <td>move one word to the left and right, respectively</td>
            </tr>
            <tr>
              <td><code>yy</code></td>
              <td>yank, or copy the current line</td>
            </tr>
            <tr>
              <td><code>yy2</code></td>
              <td>yank, or copy 2 lines</td>
            </tr>
            <tr>
              <td><code>p</code></td>
              <td>paste</td>
            </tr>
            <tr>
              <td><code>dd</code></td>
              <td>delete a line</td>
            </tr>
            <tr>
              <td><code>dd2</code></td>
              <td>delete 2 lines</td>
            </tr>
            <tr>
              <td><code>u</code></td>
              <td>undo</td>
            </tr>
            <tr>
              <td><code>ctrl + r</code></td>
              <td>redo</td>
            </tr>
            <tr>
              <td><code>gg</code></td>
              <td>go to top of page</td>
            </tr>
            <tr>
              <td><code>GG</code></td>
              <td>go to bottom of page</td>
            </tr>
          </table>
      <h3>Bash Commands</h3>
      <table>
        <tr>
          <th>Bash</th>
          <th>Action</th>
        </tr>
        <tr>
          <td><code>ls</code></td>
          <td>list all items in working directory</td>
        </tr>
        <tr>
          <td><code>cd path/to/directory</code></td>
          <td>set the working directory</td>
        </tr>
        <tr>
          <td><code>mkdir directory_name</code></td>
          <td>makes a directory/folder</td>
        </tr>
        <tr>
          <td><code>rm file_name</code></td>
          <td>delete a file</td>
        </tr>
        <tr>
          <td><code>rm -rf file_name</code></td>
          <td>delete a folder. Uses the recursive and force flags.</td>
        </tr>
        <tr>
          <td><code>tar -xvf pokerlab.tar</code></td>
          <td>extracts the .tar file into the current directory</td>
        </tr>
        <tr>
          <td><code>scp from_server_dir to_local_dir</code></td>
          <td>copies a file from a remote server</td>
        </tr>
        <tr>
          <td><code>ssh user@server.address</code></td>
          <td>connect to a remote server</td>
        </tr>
        <tr>
          <td><code>logout</code></td>
          <td>disconnect from ssh connection</td>
        </tr>
        <tr>
          <td><code>cat /etc/hostname</code></td>
          <td>used to make sure you ssh'ed into the right place</td>
        </tr>
        <tr>
          <td><code>vim filename</code></td>
          <td>open a file in the vim text editor</td>
        </tr>
        <tr>
          <td><code>echo this is some text &gt;&gt; text.txt</code></td>
        </tr>
      </table>
      <p>It is helpful to know that starting a file path 
        with <code>~</code> indicates it is starting with the home directory 
        rather than the current directory.</p>
      <p>On the other hand, you can specify that the target directory is the current directory with a <code>.</code></p>
      <p><code>scp luke@nuros.unl.edu:~/homework/fizzbuzz .</code> copies a 
        file from the nuros server from in the homework folder in the home directory, 
        and then copies it to the current directory on my machine.</p>

    </div>
  )
}
export default VimCheatSheet;