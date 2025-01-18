import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full mt-2 p-0">
      <div className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-3">
          <section className="flex justify-center mb-3 space-x-4">
            <button className="text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700">
              <FaGoogle className="w-6 h-6" />
            </button>
            <button className="text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700">
              <FaFacebook className="w-6 h-6" />
            </button>
            <button className="text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700">
              <FaInstagram className="w-6 h-6" />
            </button>
            <button className="text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700">
              <FaYoutube className="w-6 h-6" />
            </button>
            <button className="text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700">
              <FaLinkedin className="w-6 h-6" />
            </button>
            <button className="text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700">
              <FaGithub className="w-6 h-6" />
            </button>
          </section>
        </div>

        <div className="text-center py-3 bg-gray-800">
          <p className="text-sm mt-1 text-gray-400">
            Copyright ©{" "}
            <a
              href="https://mui.com/"
              className="text-blue-400 hover:underline"
            >
              {import.meta.env.VITE_APP_TITLE || "Splitzy"}.com&nbsp;
            </a>
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}
