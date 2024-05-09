import React from "react"
import { Link } from "react-router-dom"

const Quizes = () => {
  const courseQuize = [
    {
      _id: "1",
      courseTitle: "Mobile & Application Development",
      courseCode: "CSI-601",
      quizes: [
        {
          quizeTitle: "Quize 1",
          quizeDescription:
            "Fingerstache flexitarian street art 8-bit waist co.",
          quizeAuther: "Hamza",
          uploadDate: "5-May=2024",
          quizeDetails: [
            {
              questionTitle: "",
              options: [
                {
                  option1: "",
                },
                {
                  option2: "",
                },
              ],
            },
          ],
        },
        {
          title: "Quize 2",
          description: "Fingerstache flexitarian street art 8-bit waist co.",
          quizeAuther: "Zahid",
          uploadDate: "5-May=2024",
        },
      ],
    },

    {
      _id: "2",
      courseTitle: "Compiler Construction",
      courseCode: "CSI-602",
      quizes: [
        {
          quizeTitle: "Quize 1",
          quizeDescription:
            "Fingerstache flexitarian street art 8-bit waist co.",
          quizeAuther: "Hamza",
          uploadDate: "5-May=2024",
        },
        {
          title: "Quize 2",
          description: "Fingerstache flexitarian street art 8-bit waist co.",
          quizeAuther: "Zahid",
          uploadDate: "5-May=2024",
        },
      ],
    },
    // {
    //   _id: "3",
    //   courseTitle: "Parallel & Distributed Computing",
    //   courseCode: "CSI-603",
    //   quizes: [
    //     {
    //       "quizeTitle":"Quize 1",
    //       "quizeDescription":"Fingerstache flexitarian street art 8-bit waist co.",
    //       "quizeAuther":"Hamza",
    //       "uploadDate":"5-May=2024"
    //     },
    //     {
    //       "title":"Quize 2",
    //       "description":"Fingerstache flexitarian street art 8-bit waist co.",
    //       "quizeAuther":"Zahid",
    //       "uploadDate":"5-May=2024"
    //     }
    //   ]
    // },
    // {
    //   _id: "4",
    //   courseTitle: "Computer Graphics",
    //   courseCode: "CSI-604",
    //   quizes: [
    //     {
    //       "quizeTitle":"Quize 1",
    //       "quizeDescription":"Fingerstache flexitarian street art 8-bit waist co.",
    //       "quizeAuther":"Hamza",
    //       "uploadDate":"5-May=2024"
    //     },
    //     {
    //       "title":"Quize 2",
    //       "description":"Fingerstache flexitarian street art 8-bit waist co.",
    //       "quizeAuther":"Zahid",
    //       "uploadDate":"5-May=2024"
    //     }
    //   ]
    // },
  ]

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-wrap -m-4">
            {courseQuize.map((item) => {
              return (
                <div key={item._id} className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="border-2 border-red-200 p-6 rounded-lg">
                    <Link
                      to={`/student-portal/quizes/${item.courseCode}`}
                      className="text-lg cursor-pointer text-[#b5594f] font-medium title-font mb-2"
                    >
                      {item.courseTitle} - {item.courseCode}
                    </Link>
                    <p className="leading-relaxed text-[#b5594f] text-base">
                      Quizes
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Quizes
