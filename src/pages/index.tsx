import { signIn, signOut, useSession } from "next-auth/react";
import Counter from "./components/counter";
import LightDarkModeSwitcher from "./components/light-dark-switcher";
import { useAppSelector } from "../../redux/hook";
import { selectMode } from "../../redux/slices/darkModeSlice";

const Home = () => {
  const { data: session, status } = useSession();

  const isDarkMode = useAppSelector(selectMode);

  if (status === "loading") {
    return <main>Loading...</main>;
  }

  return (
    <body
      className={`min-h-screen ${
        isDarkMode ? "dark" : ""
      } bg-light-grey text-black`}
    >
      {session ? (
        <>
          <LightDarkModeSwitcher />
          <Counter />

          <button onClick={() => signOut()}>Logout</button>
        </>
      ) : (
        <div>
          <button onClick={() => signIn("discord")}>Login with Discord</button>
        </div>
      )}
    </body>
  );
};

export default Home;
