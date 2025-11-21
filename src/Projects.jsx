import './App.css';

export function Projects() {
  return (
    <div>
      <div className="projectsDetails">
        <h1>Projects</h1>
        <p>Cool projects I've made throughout my months or years of programming</p>
      </div>

      <div
        className="project-buttons"
        onClick={() => (window.location.href = 'https://github.com/absolutegoaat/CipherStorm')}
        style={{ cursor: 'pointer' }}
      >
        <img
          src="https://files.catbox.moe/s6v0i6.png"
          width="400px"
          style={{ marginBottom: '10px' }}
        />
        <h3>CipherStorm</h3>
        <p>
          A criminal database manager for law enforcement and other vigilante groups.
          Made in Python, Flask, and MySQL.
        </p>
      </div>

      <br />

      <div
        className="project-buttons"
        onClick={() => (window.location.href = 'https://github.com/absolutegoaat/Vanguard')}
        style={{ cursor: 'pointer' }}
      >
        <h3>Vanguard</h3>
        <p>
          A C2 server for malware development using an API to send back data from clients.
          Made in Python and Ext JS.
        </p>
      </div>

      <br />

      <div
        className="project-buttons"
        onClick={() => (window.location.href = 'https://github.com/absolutegoaat/CipherView')}
        style={{ cursor: 'pointer' }}
      >
        <h3>CipherView</h3>
        <p>
          A database viewer for law enforcement and vigilante groups. Made in C# and MySQL.
          Similar to CipherStorm but desktop-based and simplified.
        </p>
      </div>
    </div>
  );
}
