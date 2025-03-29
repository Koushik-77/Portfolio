import { FaGithub, FaLinkedin, FaTwitter, FaHackerrank } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiCodeforces } from "react-icons/si";

export const Socials = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Koushik-77",
      icon: <FaGithub className="w-5 h-5" />,
      color: "text-gray-400 hover:text-white"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/koushik-teja-rachamalla-873160254",
      icon: <FaLinkedin className="w-5 h-5" />,
      color: "text-blue-400 hover:text-blue-300"
    },
    {
      name: "Twitter",
      url: "https://x.com/KoushikPatel37",
      icon: <FaTwitter className="w-5 h-5" />,
      color: "text-sky-400 hover:text-sky-300"
    }
  ];

  const codingProfiles = [
    {
      name: "LeetCode",
      url: "https://leetcode.com/Koushik_Teja",
      icon: <SiLeetcode className="w-5 h-5" />,
      color: "text-orange-400 hover:text-orange-300"
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/Koushik_Teja",
      icon: <FaHackerrank className="w-5 h-5" />,
      color: "text-emerald-400 hover:text-emerald-300"
    },
    {
      name: "CodeChef",
      url: "https://codechef.com/users/koushikpatel",
      icon: <SiCodechef className="w-5 h-5" />,
      color: "text-yellow-400 hover:text-yellow-300"
    },
    {
      name: "CodeForces",
      url: "https://codeforces.com/profile/KoushikTeja",
      icon: <SiCodeforces className="w-5 h-5" />,
      color: "text-red-400 hover:text-red-300"
    }
  ];

  return (
    <section id="socials" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-white text-center">
          Connect With Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Social Profiles Card */}
          <div className="bg-gray-900 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="bg-blue-900/30 text-blue-400 p-2 rounded-lg">
                <FaLinkedin className="w-6 h-6" />
              </span>
              Social Profiles
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 ${social.color} transition-colors py-2 px-4 rounded-lg bg-gray-800 hover:bg-gray-700`}
                >
                  {social.icon}
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Coding Profiles Card */}
          <div className="bg-gray-900 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="bg-blue-900/30 text-blue-400 p-2 rounded-lg">
                <FaGithub className="w-6 h-6" />
              </span>
              Coding Profiles
            </h3>
            <div className="flex flex-wrap gap-3">
              {codingProfiles.map((profile, index) => (
                <a
                  key={index}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 ${profile.color} transition-colors py-2 px-4 rounded-lg bg-gray-800 hover:bg-gray-700`}
                >
                  {profile.icon}
                  <span>{profile.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};