import { store } from "../Store";

const Home = () => {
  return (
    <div className="flex justify-center h-screen items-center">
      <div className="flex flex-col shadow-lg gap-4 justify-center items-center h-48 w-64">
        <p className="text-center text-2xl">Welcome to Mai.io</p>

        <button
          type="submit"
          onClick={() => {
            store.dispatch({
              type: "userLoggedOut",
            });
          }}
          className=" text-black bg-primary-600 shadow-lg hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
