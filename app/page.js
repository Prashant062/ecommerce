import styles from "./page.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faMagnifyingGlass, faBookmark, faUser } from '@fortawesome/free-solid-svg-icons';
import Item from "./Items/Item";

export default function Home() {
  return (
    <>
      <section className="header-section">
        <div className="top-header">
          <div className="text">
            <span>TANN TRIM</span>
          </div>

          <div className="icon">
            <a href=" /"><FontAwesomeIcon style={{ height: '24px', width: '24px' }} icon={faBagShopping} /></a>
            <a href="/"><FontAwesomeIcon style={{ height: '24px', width: '24px' }} icon={faMagnifyingGlass} /></a>
            <a href="/"><FontAwesomeIcon style={{ height: '24px', width: '24px' }} icon={faBookmark} /></a>
            <a href="/"><FontAwesomeIcon style={{ height: '24px', width: '24px' }} icon={faUser} /></a>
          </div>
        </div>

        <div className="header-bottom">
          <ul>
            <li><a href="/bags">Bags</a></li>
            <li><a href="/travel">Travel</a></li>
            <li><a href="/accesories">Accesories</a></li>
            <li><a href="/gifting">Gifting</a></li>
            <li><a href="/jewelery">Jewelery</a></li>
          </ul>
        </div>


      </section>
      <section className="accesories">
        <div className="image">
          <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTdU9QUA4RMMdXOxWEc0gxE_6rxu9B2Dx6zHfvBs6wOVMGf-2aT" alt="" />
          <p>All Bags</p>
        </div>
        <div className="image">
          <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQUVPM1taj-KQMYTrdQAaMSK9ZG6hIpTkx412ZRq6vdcfgDONRB" alt="" />
          <p>Vanity Pouch</p>
        </div>
        <div className="image">
          <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR194FSWeoWYT7dGbiKBKS_NmHlJ83hCOfxHfGS7wdwgVNqYIOc" alt="" />
          <p>Tote Bag</p>
        </div>
        <div className="image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cF0NEkUjDY_U9Hteu8ZJPJJJL6P-9OB3dGufcU64Jf0od7Op" alt="" />
          <p>Duffle Bag</p>
        </div>
        <div className="image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh-keQiLUZOsIHkaPgE42csAieqdBQJC8SQHHYsP3RaTRcyc1k" alt="" />
          <p>Laptop Sleeve</p>
        </div>
        <div className="image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxRVh3pN8H67MiiCUDM75RgBVgpXVk8Veio6hgbkL--ab0d5RT" alt="" />
          <p>Laptop Sleeve</p>
        </div>
        <div className="image">
          <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQH_LiG-fB_lxRgcg3FIZw3pCc1x6d3ElmYzyA5FxetCzRn1e-e" alt="" />
          <p>Slings Bgs</p>
        </div>
        <div className="image">
          <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTMD_lSbq5h4P_4I7vCcvJ96WbGFIB25FLsphlCpBdWj4Tuo0_z" alt="" />
          <p>Handbags</p>
        </div>
      </section>
      <Item/>
    </>
  );
}
