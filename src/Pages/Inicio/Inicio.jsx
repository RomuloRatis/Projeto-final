import S from'./inicio.module.scss'
import reading from '../../assets/Images/reading.png'
import ciclo from '../../assets/Images/ciclo.png'
import balance from '../../assets/Images/balance.png'
import transform from '../../assets/Images/transform.png'

export default function inicio(){
    return(
        <section>
            <section className={S.post}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
            <section className={S.devoDoar}>
                <div>
                    <h2>Porque devo doar?</h2>
                </div>
            </section>
            <section className={S.boxCard}>
                <article>
                    <img src={ciclo} alt="" />
                    <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                </article>
                <article>
                    <img src={reading} alt="" />
                    <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                </article>
                <article>
                    <img src={transform} alt="" />
                    <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                </article>
                <article>
                    <img src={balance} alt="" />
                    <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                </article>
            </section>
        </section>
    )

}