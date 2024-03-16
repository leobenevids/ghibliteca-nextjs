import MainScreen from "@/components/MainScreen";
import { MovieProvider } from "@/context/MovieContext";
import { addLastMovie } from "@/mock";

const getFilms = async () => {
  const res = await fetch("https://ghibliapi.vercel.app/films");
  const data = await res.json();
  return addLastMovie(data);
};

export default async function HomePage() {
  const films = await getFilms();
  return (
    <main>
      <MovieProvider films={films}>
        <MainScreen films={films} />
      </MovieProvider>
    </main>
  );
}
