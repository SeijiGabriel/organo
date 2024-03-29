import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://www.facebook.com/gabriel.kanda" target="_blank" rel="noreferrer">
                        <img src="/imagens/fb.png" alt="Facebook" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/AluraOnline?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noreferrer">
                        <img src="/imagens/tw.png" alt="X" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/gabrielsskanda/" target="_blank" rel="noreferrer">
                        <img src="/imagens/ig.png" alt="Instagram" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="Logo organo" />
        </section>
        <section>
            <p>
                Desenvolvido por Alura.
            </p>
        </section>
    </footer>)
}

export default Rodape