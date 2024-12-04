import S from'./doados.module.scss'
import Livro from '../../assets/Images/Livro.png'

export default function Doados(){

    return(
            <section className={S.boxDoados}>
                <h2>Livros Doados</h2>
                <section className={S.boxBooks}>
                    <article>
                        <img src={Livro} alt="Imagem do Livro - O protagonista" />
                        <h3>O protagonista</h3>
                        <p>Suanne Andrade</p>
                        <p>Ficção</p>
                    </article>
                    <article>
                        <img src={Livro} alt="Imagem do Livro - O protagonista" />
                        <h3>O protagonista</h3>
                        <p>Suanne Andrade</p>
                        <p>Ficção</p>
                    </article>
                </section>
            </section>
           
    )
    }