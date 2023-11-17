import '../App.css';

const ProfilePage = () => {
    return /*html*/(
      <div id="card-container" className="">
      <img id="round" src="../avt.jpg" alt="user" />
      <h3>Lương Đức Tài</h3>
      <h6>Nam Định</h6>
      <h6>21</h6>
      <div id="buttons">
        <button id="primary">
        <h3><a href="https://www.facebook.com/bachhotoannang">Facebook</a></h3>
        </button>
        <br></br>
        <button id="primary ghost">
          <h3><a href="https://github.com/Tazuk15?tab=repositories">Github</a></h3>
        </button>
      </div>
      <div id="skills">
        <h6>Skills</h6>
        <ul>
          <li>UI / UX</li>
          <li>Front End Development</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node</li>
        </ul>
      </div>
    </div>
    )
}
export default ProfilePage;
