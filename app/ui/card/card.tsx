import Image from 'next/image';
import styles from './card.module.css';
import { Weather } from '@/app/lib/definitions';



export default function Card(weather:Weather){

    return(
        <div className={styles.card}>
           <div className={styles.header}>
            <div className={styles.describe}>
            <h3 className= {styles.title}>
               {weather.city} 
             </h3>
             <p className={styles.date}> {weather.date}</p>
             <p className={styles.temp}>{weather.temperature}°</p>
            </div>
             <div className={styles.weather}>
                <p> <span className='font-900' >Clima /</span> {weather.weatherName}</p>

             </div>
           </div>
           <div className={styles.body}>
            <div className={`${styles.item} border-bottom-tertiary`}>
                <div className={styles.icon}>
                        <Image
                        src="/icons/temp.png"
                        width={25}
                        height={25}
                        alt="temp icon"
                        />
                    <span className="ml-2" >Temperatura</span>
                    
                </div>
                <p>{weather.temperature}°</p>
            </div>
              <div className={`${styles.item} border-bottom-tertiary`}>
                <div className={styles.icon}>
                        <Image
                        src="/icons/temp.png"
                        width={25}
                        height={25}
                        alt="temp icon"
                        />
                    <span className="ml-2" >Promedio de lluvia </span>
                    
                </div>
                <p>80%</p>
            </div>
           
            <div className={`${styles.item} border-bottom-tertiary`}>
                      <div className={styles.icon}>
                       <Image
      src="/icons/humidity.png"
      width={25}
      height={25}
      alt="humidity icon"
    />
                    <span className="ml-2" >Humedad</span>
                    
                </div>
                <p>{weather.humidity}%</p>
            </div>
             <div className={styles.item}>
                      <div className={styles.icon}>
                       <Image
      src="/icons/wind.png"
      width={25}
      height={25}
      alt="wind icon"
    />
                    <span className="ml-2" >Velocidad Viento</span>
                    
                </div>
                <p>{weather.windSpeed} m/s</p>
            </div>
           </div>

        </div>
    );
    
}