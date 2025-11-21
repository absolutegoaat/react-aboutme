import './App.css';

const user = {
  name: 'absolutegoat',
  imageUrl: 'https://avatars.githubusercontent.com/u/212649737?v=4',
  imageSize: 40,
  desc: `Hello! Im absolutegoat, im a software engineer`,
};

function SmallInfo() {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.desc}</p>
      <p>Software I use</p>
      <ul>
        <li>Visual Studio Code</li>
        <li>Visual Studio 2022</li>
        <li>Fork (Git Client)</li>
        <li>x64dbg/x32dbg</li>
        <li>Ghidra</li>
        <li>DBeaver</li>
        <li>Insomnia</li>
        <li>VMWare Workstation</li>
        <li>PuTTY</li>
        <li>Tailscale</li>
      </ul>

      <div className='status-row'>
        <a href='https://github.com/absolutegoaat'>Github Page</a>
        <div className='status-label'>
          #swag #deltarune #python #csharp #c #java #html #css #javascript #developer #windows #reverse-engineer #ralsei #the-fun-gang
        </div>
      </div>
    </div>
  );
}

function LargeInfo() {
  return (
    <div>
      <h2>About</h2>
      <div className="details">
        <ul>
          <li>
            <strong>Languages:</strong>
            <iframe
              src="https://skillicons.dev/icons?i=py,cs,c,java,html,css,js,windows"
              style={{ border: 0, margin: '5px', width: '100%', height: '50px' }}
              title="languages"
            />
          </li>
          <li>
            <strong>Reverse Engineering: </strong>x64dbg, x32dbg, Ghidra
          </li>
        </ul>
        <p>
          i just chill and play <span className='gradientText'>deltarune</span> if i
          were to be honest, anyway, welcome to my little corner of the internet
          where i code! (alot!)
        </p>
        <img
          src="https://media1.tenor.com/m/g_1uvqECZSsAAAAC/ralsei-deltarune.gif"
          alt="Ralsei Pan"
          style={{
            maxWidth: '300px',
            borderRadius: '10px',
            marginTop: '10px',
          }}
        />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App-header">
      <div className="container">
        <div className="small-card">
          <SmallInfo />
        </div>
        <div className="large-card">
          <LargeInfo />
        </div>
      </div>
    </div>
  );
}

export default App;