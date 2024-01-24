
import styles from "./page.module.css";
import { fetchWeatherData } from "./lib/data";
import Card from "./ui/card/card";

export default async function Home() {
const data = await fetchWeatherData()
const {id, humidity, temperature, windSpeed,city,date,weatherName} = data;


  return (
    <main className={styles.main}>
      <Card id={data.id} humidity={humidity} temperature={temperature} windSpeed={windSpeed} city={city}  date={date} weatherName={weatherName}></Card>
       <Card id={data.id} humidity={humidity} temperature={temperature} windSpeed={windSpeed} city={city}  date={date} weatherName={weatherName}></Card>
    </main>
  );
}
