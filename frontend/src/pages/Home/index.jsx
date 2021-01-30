import React from 'react';

import Animation from '../../components/Animation';
import CardCourse from '../../components/CardCourse';
import CardCategory from '../../components/CardCategory';

import './styles.css';
import yoda from '../../assets/images/characters/yoda.png';
import separator from '../../assets/images/separator.svg';

import courseReactRedux from '../../assets/images/courses/react-redux.jpg';
import coursePHP from '../../assets/images/courses/php.jpg';
import courseFlutter from '../../assets/images/courses/flutter.jpg';
import phpIcon from '../../assets/images/courses/php-icon.svg';
import databaseIcon from '../../assets/images/courses/database-icon.svg';
import securityIcon from '../../assets/images/courses/security-icon.svg';
import flutterIcon from '../../assets/images/courses/flutter-icon.svg';
import reactIcon from '../../assets/images/courses/react-icon.svg';
import cloudrIcon from '../../assets/images/courses/cloud-icon.svg';

const Home = () => {

    return (
        <>
            {/* <Animation /> */}
            <div className="section-1">
                <div className="container">
                    <header className="header">
                        <h2>Luke Code</h2>
                        <nav>
                            <button>
                                FAZER LOGIN
                            </button>
                            <button>
                                INSCREVA-SE
                            </button>
                            <button className="btn-menu">
                                <i className="fas fa-bars"></i>
                            </button>
                        </nav>
                    </header>
                    <main>
                        <section>
                            <h1>Se torne um mestre <br /> da programação!</h1>
                            <img src={separator} alt="" />
                            <p>
                                De o próximo passo para o seu futuro, <br />
                                que a força esteja com você.
                            </p>
                        </section>
                        <section>
                            <img src={yoda} alt="Yoda - Star Wars" />
                        </section>
                    </main>
                </div>
            </div>
            <div className="section-2">
                <div className="container">
                    <h2>+3 Cursos Completos</h2>
                    <p>Na Luke code, você tem acesso a 3 cursos gratuitos, basta se cadastrar na plataforma.</p>
                    <section className="card-container">
                        <CardCourse
                            image={courseReactRedux}
                            alt="Curso de React e Redux"
                        >
                            Desenvolvimento front-end <br /> React e Redux{/*Elemento filho, com isso consigo recuperar no componente passando "props.children" */}
                        </CardCourse>
                        <CardCourse
                            image={coursePHP}
                            alt="PHP 7 - Trabalhando com PSRs"
                        >
                            PHP 7 - Trabalhando com PSRs
                        </CardCourse>
                        <CardCourse
                            image={courseFlutter}
                            alt="Desenvolvimento IOS e Android com Flutter"
                        >
                            Desenvolvimento IOS e Android <br /> com Flutter
                        </CardCourse>
                        <button>
                            INSCREVA-SE
                        </button>
                    </section>

                </div>
            </div>
            {/* <div className="section-3">
                <div className="container">
                    <h2>O que oferecemos para você</h2>
                    <section className="categories-container">
                        <CardCategory 
                            image={phpIcon}
                            alt="Ícone do PHP"
                            title="BACK-END"
                            numberCourses="22 Cursos"
                            color="#E31B1B"
                        />
                        <CardCategory 
                            image={databaseIcon}
                            alt="Íconde do Banco de dados"
                            title="BANCO DE DADOS"
                            numberCourses="2 Cursos"
                            color="#f0df48"
                        />
                        <CardCategory 
                            image={securityIcon}
                            alt="Ícone de segurança"
                            title="SEGURANÇA"
                            numberCourses="22 Cursos"
                            color="#b58fdb"
                        />        
                        <CardCategory 
                            image={flutterIcon}
                            alt="Ícone do Flutter"
                            title="MOBILE"
                            numberCourses="7 Cursos"
                            color="#2159AB"
                        />        
                        <CardCategory 
                            image={reactIcon}
                            alt="Ícone do React"
                            title="FRONT-END"
                            numberCourses="18 Cursos"
                            color="#59FE9B"
                        />        
                        <CardCategory 
                            image={cloudrIcon}
                            alt="Ícone do Cloud Computing"
                            title="CLOUD COMPUTING"
                            numberCourses="22 Cursos"
                            color="#E34B1B"
                        />        
                    </section>
                </div> 
            </div>*/}
        </>
    );
}

export default Home;