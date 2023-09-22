import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Life Commits <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          Where Commitments Become Accomplishments
        </span>
      </h1>
      <p className="desc text-center">
        LifeCommits, a vibrant community dedicated to personal growth,
        achievement, and inspiration. Join us on a transformative journey as you
        make meaningful commitments, achieve milestones, and inspire others
        along the way. Together, lets commit, achieve, and inspire a life of
        purpose and fulfillment.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
