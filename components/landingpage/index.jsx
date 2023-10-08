import Link from "next/link";
import Head from "next/head";

import styles from "./welcome.module.css";

const Welcome = ({ user }) => {

  return (
    <div className={styles.welcome}>
      <Head>
        <title>Welcome to PR dashboard</title>
      </Head>
      <div className={styles.welcomeTitle}>
        <span className="flex items-center gap-2">
          <img
            src={user.image}
            className="rounded-full"
            alt={user.name}
            width={50}
            height={50}
          />
          Welcome, {user.name}!
        </span>
      </div>
      <p className={styles.welcomeText}>
        <Link
          className={`text-blue-500 link md:underline cursor:pointer`}
          href="/dashboard/reviewerslist"
        >
          Click to visit the dashboard
        </Link>
      </p>
      <div className="flex flex-col items-center  mt-2 gap-2">
        <h2>About PR dashboard</h2>
        <p>
          PR dashboard is an awesome application that helps you track and manage
          your pull requests.
        </p>
        <p>
          With PR dashboard, you can easily view statistics and analytics for
          your repositories, making it easier than ever to monitor your
          development progress.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
