import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Commitment</span>
      </h1>
      <p className="desc max-w-md text-left">
        {type} your commitment today and achive it infront of everyone to
        inspire an achiver community!
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your Today's Commitment
          </span>
          <textarea
            value={post.commitment}
            onChange={(e) =>
              setPost((prevPost) => ({
                ...prevPost,
                commitment: e.target.value,
              }))
            }
            placeholder="Make your commitment here..."
            required
            className="form_textarea"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            For {` `}
            {/* <span className="font-normal">(#life, #health, #wealth)</span> */}
          </span>
          <input
            value={post.tag}
            onChange={(e) =>
              setPost((prevPost) => ({ ...prevPost, tag: e.target.value }))
            }
            placeholder="#life, #health, #wealth"
            required
            className="form_input"
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
