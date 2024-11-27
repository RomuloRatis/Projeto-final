import S from './footer.module.scss'
import face from '../../assets/Images/face.png'
import twitter from '../../assets/Images/twitter.png'
import youtube from '../../assets/Images/youtube.png'
import linkedin from '../../assets/Images/linkedin.png'
import insta from '../../assets/Images/insta.png'


export default function Footer(){
    return(
    <footer>
        <section className={S.boxSocial}>
            <h3>4002-8922</h3>
            <nav>
                <a href=""> <img src={face} alt="" /></a>
                <a href=""> <img src={twitter} alt="" /></a>
                <a href=""> <img src={youtube} alt="" /></a>
                <a href=""> <img src={linkedin} alt="" /></a>
                <a href=""> <img src={insta} alt="" /></a>
            </nav>
        </section>
        <section className={S.boxEnd}>
            <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
        </section>
    </footer>
    )
}