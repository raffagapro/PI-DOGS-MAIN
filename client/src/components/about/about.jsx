import React from "react";
import {
    container,
    row,
    mainRow,
    wrapper,
    flex,
    profilePhoto,
    mainTitle,
    aboutMeRow,
    leftCol,
    rightCol,
    eduRow,
    noB,
    eduItem,
    eduCont,
    gradDate,
    skillRow,
    skillCont
} from './about.module.css'
import chrisIm from '../../images/chris.jpg'

const About = () =>{
    return(
        <div className={container}>
            <div className={row+' '+ mainRow}>
                <div className={wrapper+' '+flex}>
                    <div className="left-col">
                        <img src={chrisIm} className={profilePhoto} alt="" />
                    </div>
                    <div className={mainTitle}>
                        <h1>Christopher D. Luna</h1>
                        <h5>Web Developer | raffagapro@gmail.com | +52 9992-25-6614</h5>
                    </div>
                </div>
            </div>

            <div className={row+' '+aboutMeRow}>
                <div className={wrapper+' '+flex}>
                    <div className={leftCol}>
                        <h5>ACERCA DE</h5>
                    </div>
                    <div className={rightCol}>
                        <p>
                            Soy un desarrollador de aplicaciones web y programador Full Stack, con 3 años de experiencia.
                            Me apasiona la I.A., la tecnología y todos los medios de comunicación visual. Amante del saber cómo funcionan
                            las cosas. Esta naturaleza curiosa me ha llevado a ser una persona autodidacta que siempre está en constante mejora,
                            y a tener una personalidad orientada a la resolución de problemas. Sin embargo, siento que necesito más entrenamiento
                            formar, y algún tipo de comunidad con la cual crecer y intercambiar conocimiento, al mismo tiempo que formalizó
                            Mi experiencia y trabajo como programador. Al terminar el curso me gustaría tener la seguridad, que poseo el
                            conocimiento y las habilidades para competir laboralmente en un mejor nivel, y con empresas de nivel mundial.
                        </p>
                    </div>
                </div>
            </div>

            <div className={row+' '+ eduRow+' '+ noB}>
                <div className={wrapper+' '+ flex}>
                    <div className={leftCol}>
                        <h5>EDUCACIÓN</h5>
                    </div>
                    <div className={rightCol}>

                        <div className={eduItem}>
                            <div className={eduCont}>
                                <h5>LICENCIATURA EN ARQUITECTURA</h5>
                                <p>Universidad Autonoma de Yucatan</p>
                                <p>Merida, YUC. México</p>
                            </div>
                            <div className={gradDate}>
                                <h5>20012 - 20016</h5>
                            </div>
                        </div>

                        <div className={eduItem}>
                            <div className={eduCont}>
                                <h5>ASSOCIATE DEGREE IN FINE ARTS</h5>
                                <p>College of Dupage</p>
                                <p>Glen Elgyn, IL. USA</p>
                            </div>
                            <div className={gradDate}>
                                <h5>2002 - 2006</h5>
                            </div>
                        </div>
                    </div>            
                </div>
            </div>

            <div className={row+' '+ eduRow}>
                <hr />
                <div className={wrapper+' '+ flex}>
                <div className={leftCol}>
                        <h5>EXPERIENCIA</h5>
                    </div>
                    <div className={rightCol}>

                        <div className={eduItem}>
                            <div className={eduCont}>
                                <h5>HOTEL CASA HIPIL/ AURORA COLONIAL</h5>
                                <p>Direcccion Atención al Cliente y ventas</p>
                                <p>Valladolid, YUC. México</p>
                                <p><b>Jefe Inmediato: Roberto Alcocer (9993-57-9006)</b></p>
                                <p>- Desarrollo de campañas publicitarias</p>
                                <p>- Creacion de reservacion</p>
                                <p>- Seguimiento de reservaciones durante y despues de sus estadias</p>
                                <p>- Optimización de procedimientos</p>
                                <p>- Creación de manuales de control de calidad</p>
                                <p>- Desarrollo y capacitación en ventas y atención al cliente</p>
                            </div>
                            <div className={gradDate}>
                                <h5>2021 - 2022</h5>
                            </div>
                        </div>

                        <div className={eduItem}>
                            <div className={eduCont}>
                                <h5>E-TRANSFERS / CITY CAR RENTAL</h5>
                                <p>Gerencia Atención al Cliente</p>
                                <p>Merida, YUC. México</p>
                                <p><b>Jefe Inmediato: Luis Cabrera (9993-24-3402)</b></p>
                                <p>- Desarrollo de campañas publicitarias</p>
                                <p>- Reclutamiento y capacitación de nuevo personal</p>
                                <p>- Optimización de procedimientos</p>
                                <p>- Creación de manuales de control de calidad</p>
                                <p>- Desarrollo y capacitación en ventas y atención al cliente</p>
                            </div>
                            <div className={gradDate}>
                                <h5>2018 - 2021</h5>
                            </div>
                        </div>

                        <div className={eduItem}>
                            <div className={eduCont}>
                                <h5>RELAXON</h5>
                                <p>Freelancing</p>
                                <p>Merida, YUC. México</p>
                                <p><b>Jefe Inmediato: Juan Carlos Luna (9993-34-9191)</b></p>
                                <p>- Desarrollo de campañas publicitarias</p>
                                <p>- Diseño de materiales visuales</p>
                                <p>- Fotografía editorial</p>
                                <p>- Ventas y atención al cliente</p>
                            </div>
                            <div className={gradDate}>
                                <h5>2015 - 2021</h5>
                            </div>
                        </div>

                        <div className={eduItem}>
                            <div className={eduCont}>
                                <h5>YASC</h5>
                                <p>Team Supervisor</p>
                                <p>Merida, YUC. México</p>
                                <p><b>Jefe Inmediato: Hector Zuniga (9992-97-4394)</b></p>
                                <p>- Supervición de personal</p>
                                <p>- Reclutamiento y capacitación de nuevo personal</p>
                                <p>- Desarrollo y capacitación en ventas y atención al cliente</p>
                                <p>- Ventas y atención al cliente</p>
                                <p>- Manejo de equipos de ventas orientados a metas</p>
                            </div>
                            <div className={gradDate}>
                                <h5>2015 - 2017</h5>
                            </div>
                        </div>

                        <div className={eduItem}>
                            <div className={eduCont}>
                                <h5>INTERLINGUA</h5>
                                <p>Profesor de Ingles</p>
                                <p>Merida, YUC. México</p>
                                <p>- Aprendizaje del idioma ingles</p>
                                <p>- Planeacion e implementacion de clases y cursos</p>
                                <p>- Evalución de conocimientos adquiridos</p>
                            </div>
                            <div className={gradDate}>
                                <h5>2014 - 2017</h5>
                            </div>
                        </div>

                        <div className={eduItem}>
                            <div className={eduCont}>
                                <h5>BERLITZ POLONIA</h5>
                                <p>Profesor de Ingles</p>
                                <p>Varsovia, Polonia</p>
                                <p>- Aprendizaje del idioma ingles</p>
                                <p>- Planeacion e implementacion de clases y cursos</p>
                                <p>- Evalución de conocimientos adquiridos</p>
                            </div>
                            <div className={gradDate}>
                                <h5>2012 - 2014</h5>
                            </div>
                        </div>

                        <div className={eduItem}>
                            <div className={eduCont}>
                                <h5>RUAH DIGITAL</h5>
                                <p>Director de Projecto</p>
                                <p>Cancun, Q. Roo, México</p>
                                <p>- Desarrollo de campañas publicitarias</p>
                                <p>- Diseño, desarrollo, y manejo de branding</p>
                                <p>- Diseño de materiales visuales</p>
                                <p>- Fotografía editorial</p>
                            </div>
                            <div className={gradDate}>
                                <h5>2011 - 2011</h5>
                            </div>
                        </div>

                        <div className={eduItem}>
                            <div className={eduCont}>
                                <h5>DOLPHIN DISCOVERY</h5>
                                <p>Entrenador de delfines</p>
                                <p>Cancun, Q. Roo, México</p>
                                <p>- Cuidado y adiestramiento de animales marinos</p>
                                <p>- Impartision de shows y demostraciones educativas</p>
                                <p>- Mantenimiento y reparacion de habits</p>
                            </div>
                            <div className={gradDate}>
                                <h5>2011 - 2011</h5>
                            </div>
                        </div>

                        <div className={eduItem}>
                            <div className={eduCont}>
                                <h5>L.S. & S.</h5>
                                <p>Supervisor de almacen</p>
                                <p>Northbrook, IL. USA</p>
                                <p>- Procesamiento de órdenes en línea</p>
                                <p>- Supervicion de empaque y manejo de ordenes</p>
                                <p>- Mantenimiento y control de inventarios</p>
                            </div>
                            <div className={gradDate}>
                                <h5>2007 - 2011</h5>
                            </div>
                        </div>

                        <div className={eduItem}>
                            <div className={eduCont}>
                                <h5>TCF BANK</h5>
                                <p>Gerente de Sucursal</p>
                                <p>Emlhurst, IL. USA</p>
                                <p>- Supervición de personal</p>
                                <p>- Revición de operaciones diarias</p>
                                <p>- Desarrollo y capacitación en ventas y atención al cliente</p>
                            </div>
                            <div className={gradDate}>
                                <h5>205 - 2007</h5>
                            </div>
                        </div>
                    </div>            
                </div>
            </div>

            <div className={row+' '+ skillRow}>
                <div className={wrapper+' '+flex}>
                    <div className={leftCol}>
                        <h5>SKILLS</h5>
                    </div>
                    <div className={rightCol}>

                        <div className={eduItem}>
                            <div className={eduCont+' '+skillCont}>
                                <h5>INGLES (ESCRITO Y HABLADO)</h5>
                                <h5>HTML</h5>
                                <h5>JAVASCRIPT</h5>
                                <h5>PHP</h5>
                                <h5>LARAVEL</h5>
                            </div>
                            <div className={skillCont}>
                                <h5>100%</h5>
                                <h5>100%</h5>
                                <h5>90%</h5>
                                <h5>90%</h5>
                                <h5>90%</h5>
                            </div>
                            <div className={eduCont+' '+skillCont}>
                                <h5>C#</h5>
                                <h5>IONIC</h5>
                                <h5>CSS</h5>
                                <h5>REACT</h5>
                                <h5>MySQL</h5>
                            </div>
                            <div className={skillCont}>
                                <h5>90%</h5>
                                <h5>90%</h5>
                                <h5>90%</h5>
                                <h5>90%</h5>
                                <h5>70%</h5>
                            </div>
                        </div>

                    </div>            
                </div>
            </div>

            <div className={row+' '+aboutMeRow}>
                <div className={wrapper+' '+flex}>
                    <div className={leftCol}>
                        <h5>HOBBIES</h5>
                    </div>
                    <div className={rightCol}>
                        <p>
                            Nadar, Correr, Video Juegos, Leer, Escribir, Fotografía, Desarrollo de aplicaciones, Ajedrez.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;