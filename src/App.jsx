import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AstrologerCard from "./components/AstrologerCard";
const astrologers = [
  {
    name: "Deepak",
    rating: "4.5",
    skills: ["Vedic", "Numerology", "Prashna"],
    languages: ["Hindi", "English"],
    experience: "10 Years",
    price: "25",
    isFree: true,
    imageUrl: "https://s3-alpha-sig.figma.com/img/cfeb/9d4b/54d6727429464da83e3d974fca1bf427?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GmHqvySST5-Fed~dMtXJOa1WWrwMeK4G7QPDbpKu29oc1OswxKrC92phZ~ICMAkLWrnsGaxoSrjciLfGFZi3bnpGT0YcOBQXEs9I-bUA60F3I7-y~zApLPwXVJ51ZbrPsiA3oyeWrH-mBAwrYGEAw0sqUtzO0FP6Dpofqs6rc1w9VuZgRfVaRhpPJcOqPbDo-ZbgDX2kzzWmstYe4h5ru~PihyGYwXU9Pf8WXhlvINjggTxGTzTbusrNFIxF9hv1tgu6fr9gQYExbL9aJezi~tDL3xhjdBtrtuo6H6wQyMYMMK-BHr6gqGa4lc6qjRsIUGfcBATzgFdTj9~TaV6D7w__"
  },
  {
    name: "Priya",
    rating: "4.7",
    skills: ["Tarot", "Palmistry"],
    languages: ["English"],
    experience: "8 Years",
    price: "20",
    isFree: false,
    imageUrl: "https://s3-alpha-sig.figma.com/img/2ed7/773c/3a1e010a9f023cee70aaba43ceee2007?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VZisg6AJmdrZKme6jZUjFPUy2CDXX8WYQ2aap3eD1iZqifT4AcLHSNI74W-CgiKSQ6djMglOZQxLHrHS3I0Ptt~x2DpaqTvFRbNBojJO~sEr83eD-A4AUDGJsTk346kb2nnro4sxKiQhuQl29LYr1BA94zIFIFVATb8wDWi6LOSc63Ic4stGmUmT6VclbnpJHrEEHHJoJ2dMtj3FMKYxg5TcqB4OVnFaD~XeTACG6Sd-Dpu6rYKP8FlO-FIasRXBsKLa4P0MngwFAX2E93nX0pMkM02lC1d3pZXaTPdDPlDG-iWbd7tNkWotwHw9zG80aeWPiKRa-qqIXRoDNqtgYg__"
  },
  {
    name: "Rohan",
    rating: "4.8",
    skills: ["Vedic Astrology"],
    languages: ["Hindi"],
    experience: "5 Years",
    price: "15",
    isFree: false,
    imageUrl: "https://s3-alpha-sig.figma.com/img/5a8c/4039/08b2d24e37c0eddefc2e9c4132a47057?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HX1hWkCabe7BvsVaB6Oo1wjri0TrSj2Q3JkRMW7-C~QuESbRCllBIx6wYNwe5cYUwBKB5mrSut489C1G4gjVuN1wyTsn3DG5DaBuv2BdANYMJLyjK3FKJ8eD2AmWK44H5rGqftZ5gzmChh3GzAiLucpFNJMlHcPg~10-Idp2wGRITTjzbJTAAukXJaMewZbbvrk31E80qXhq8fCzVGgpt4X4M1Z9bLz4htTLymiHGkr5fPjCQ8SelkhvKTcvik8OIomUVFrZeDMa0E2ix9sz0EcNNlTIaX7sFZGjvk62zOytXnu0c5NhOpI8tAhUezLeo~2inM2IelUCeN9uOoOUZw__"
  },
  {
    name: "Neha",
    rating: "4.6",
    skills: ["Numerology", "Tarot"],
    languages: ["English", "Hindi"],
    experience: "7 Years",
    price: "30",
    isFree: true,
    imageUrl: "https://s3-alpha-sig.figma.com/img/4a9b/a66d/827c02a932f1eded40de79bb42bdd460?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iHZqFwu56mismqmMt3th3jy84Q94m4OWpNLgizUaEx2Jl9cDxHD-E1FWBtSAZ0Fdw76jsI99KIryPUtis4sJhPkhbIEuXTPb-o7atQMgfBHZdWVcNC6ZLUhoa7GWNWcJqinyjyFk4TT7ptNiPHLh9~hK-ej3lpbCgYqyegIG0s6Jj-DZhln5eBoFasqmGwyVkjw5506w5hLSoE5sGWSqU5XoLiIHPMoJ1RNpPApAHqvrmPogZnpUUmwRvmwk6zlS-NoEIW6v-cUTHDNNdc5G~e~JDW-Kz4Q6HD5x1AT2SspQ6l3FJHOD2uN~W5UoFmMIyHCd5YeeH7v4359zrETWLg__"
  },
  {
    name: "Amit",
    rating: "4.9",
    skills: ["Vedic", "Prashna"],
    languages: ["Hindi"],
    experience: "15 Years",
    price: "40",
    isFree: false,
    imageUrl: "https://s3-alpha-sig.figma.com/img/76ff/420a/a94eb8316e3a3f3ce51e9bd9678d16ec?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z8pTeLVir2FGJfXtRkfLCXlv~pN3WZyFbqXJmBq5dw00WN9~FNCC4qqb30qvpcRtGc3bm~fYDAOEjYvJ0mBWoJ9kHwc78jitTpedFA7A-zbV596MO4xny3yKd3qP6jhF7u6I~xzRnlphu81ZQKvnqJtWMe15TMoAaW201hY5z8Cc~~pi8FJbLXPOrIFxXVBItT~RTQhDCY81I4bNFz2YOspxTbnQbUD2ufa61Wku-N~YlM~uevnSL1iB6jd7yEd-AsIY7y4-Ce04G1OkyJS~K2PoxuZjsl-4VnguP94e-W4Mrbq~vACS6xORzVWyg4ZO5P~81oM3r9WhQL9LY~qpNA__"
  },
  {
    name: "Sonia",
    rating: "4.4",
    skills: ["Tarot", "Numerology"],
    languages: ["English"],
    experience: "10 Years",
    price: "25",
    isFree: true,
    imageUrl: "https://s3-alpha-sig.figma.com/img/66a9/98be/74db97ddee8a50195dfe502adfce3a30?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W5xPgfmtlau50TLtDdVuEpXF2RZ72cqMqhEbhgAQjUE8q4aOeilldwoVt9XdjQya-ovjwUc3hSaM6NiPRt2kNChmES2ZVCs0K0X7m0FoNm2xHapXrwBw2epWP9RF8wj9SO2BnGA4GjSl5Vo98EMh~4rO-1UNFrO2xFyzfajei6SdjhIiA0NuzEb5AuR7Pcst7DAwPb58kc9V-aHZKKUBGULxwYINK~8nTMFtpI97NiAdDehjBLvNPqSW0XvsJQA1L05lJ7I8ZCD4xMmuMFAnFdC6UXAcrT5xTXt6~m6yRrAlYJTPr7rpK5zy5EHxOUqiLYd2LJ6dAC-YGN29ZP1ftA__"
  },
  {
    name: "Arjun",
    rating: "4.3",
    skills: ["Prashna", "Numerology"],
    languages: ["Hindi"],
    experience: "6 Years",
    price: "18",
    isFree: false,
    imageUrl: "https://s3-alpha-sig.figma.com/img/2ed7/773c/3a1e010a9f023cee70aaba43ceee2007?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VZisg6AJmdrZKme6jZUjFPUy2CDXX8WYQ2aap3eD1iZqifT4AcLHSNI74W-CgiKSQ6djMglOZQxLHrHS3I0Ptt~x2DpaqTvFRbNBojJO~sEr83eD-A4AUDGJsTk346kb2nnro4sxKiQhuQl29LYr1BA94zIFIFVATb8wDWi6LOSc63Ic4stGmUmT6VclbnpJHrEEHHJoJ2dMtj3FMKYxg5TcqB4OVnFaD~XeTACG6Sd-Dpu6rYKP8FlO-FIasRXBsKLa4P0MngwFAX2E93nX0pMkM02lC1d3pZXaTPdDPlDG-iWbd7tNkWotwHw9zG80aeWPiKRa-qqIXRoDNqtgYg__"
  },
  {
    name: "Meera",
    rating: "4.6",
    skills: ["Vedic", "Numerology"],
    languages: ["Hindi", "English"],
    experience: "12 Years",
    price: "35",
    isFree: true,
    imageUrl: "https://s3-alpha-sig.figma.com/img/66a9/98be/74db97ddee8a50195dfe502adfce3a30?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W5xPgfmtlau50TLtDdVuEpXF2RZ72cqMqhEbhgAQjUE8q4aOeilldwoVt9XdjQya-ovjwUc3hSaM6NiPRt2kNChmES2ZVCs0K0X7m0FoNm2xHapXrwBw2epWP9RF8wj9SO2BnGA4GjSl5Vo98EMh~4rO-1UNFrO2xFyzfajei6SdjhIiA0NuzEb5AuR7Pcst7DAwPb58kc9V-aHZKKUBGULxwYINK~8nTMFtpI97NiAdDehjBLvNPqSW0XvsJQA1L05lJ7I8ZCD4xMmuMFAnFdC6UXAcrT5xTXt6~m6yRrAlYJTPr7rpK5zy5EHxOUqiLYd2LJ6dAC-YGN29ZP1ftA__"
  },
  {
    name: "Rajesh",
    rating: "4.7",
    skills: ["Tarot", "Vedic"],
    languages: ["English"],
    experience: "10 Years",
    price: "45",
    isFree: false,
    imageUrl: "https://s3-alpha-sig.figma.com/img/2ed7/773c/3a1e010a9f023cee70aaba43ceee2007?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VZisg6AJmdrZKme6jZUjFPUy2CDXX8WYQ2aap3eD1iZqifT4AcLHSNI74W-CgiKSQ6djMglOZQxLHrHS3I0Ptt~x2DpaqTvFRbNBojJO~sEr83eD-A4AUDGJsTk346kb2nnro4sxKiQhuQl29LYr1BA94zIFIFVATb8wDWi6LOSc63Ic4stGmUmT6VclbnpJHrEEHHJoJ2dMtj3FMKYxg5TcqB4OVnFaD~XeTACG6Sd-Dpu6rYKP8FlO-FIasRXBsKLa4P0MngwFAX2E93nX0pMkM02lC1d3pZXaTPdDPlDG-iWbd7tNkWotwHw9zG80aeWPiKRa-qqIXRoDNqtgYg__"
  },  

];

const Services = () => <div>Services Page</div>;
const Astrologers = () => <div>Astrologers Page</div>;
const Blogs = () => <div>Blogs Page</div>;

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div>
          <h3 className="text-center text-2xl pt-4 text-[#0E2339] font-semibold">Chat with Astrologers</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
              {astrologers.map((astrologer, index) => (
                <AstrologerCard
                  key={index}
                  name={astrologer.name}
                  rating={astrologer.rating}
                  skills={astrologer.skills}
                  languages={astrologer.languages}
                  experience={astrologer.experience}
                  price={astrologer.price}
                  isFree={astrologer.isFree}
                  imageUrl={astrologer.imageUrl}
                />
              ))}
            </div>
          </div>
        } />
        <Route path="/services" element={<Services />} />
        <Route path="/astrologers" element={<Astrologers />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </Router>
  );
};

export default App;
