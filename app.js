// const express = require('express')
// // import {courses} from "./utils/db/courses"
// const app = express()
// const port = 3000
// // app.use(express.static('public'))
// app.get('/', (req, res) => {
//   res.send([
//     {
//         courseId: "1",
//         title: "Learn TypeScript",
//         subtitle: "A comprehensive guide to TypeScript",
//         duration: "5 hours",
//         language: "English",
//         category: "Programming",
//         Platform: "Udemy",
//         courseContent: "Introduction, Basics, Advanced Topics",
//         courseContentLink: "http://example.com/typescript-course",
//         imageUrl: "http://example.com/images/typescript.png"
//     },
//     {
//         courseId: "1",
//         title: "Learn TypeScript",
//         subtitle: "A comprehensive guide to TypeScript",
//         duration: "5 hours",
//         language: "English",
//         category: "Programming",
//         Platform: "Udemy",
//         courseContent: "Introduction, Basics, Advanced Topics",
//         courseContentLink: "http://example.com/typescript-course",
//         imageUrl: "http://example.com/images/typescript.png"
//     }
// ])
//   console.log([
//     {
//         courseId: "1",
//         title: "Learn TypeScript",
//         subtitle: "A comprehensive guide to TypeScript",
//         duration: "5 hours",
//         language: "English",
//         category: "Programming",
//         Platform: "Udemy",
//         courseContent: "Introduction, Basics, Advanced Topics",
//         courseContentLink: "http://example.com/typescript-course",
//         imageUrl: "http://example.com/images/typescript.png"
//     },
//     {
//         courseId: "1",
//         title: "Learn TypeScript",
//         subtitle: "A comprehensive guide to TypeScript",
//         duration: "5 hours",
//         language: "English",
//         category: "Programming",
//         Platform: "Udemy",
//         courseContent: "Introduction, Basics, Advanced Topics",
//         courseContentLink: "http://example.com/typescript-course",
//         imageUrl: "http://example.com/images/typescript.png"
//     }
// ])
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route handler for the root URL
// app.get('/', (req, res) => {
//   res.send('Hello World! This is a static file server.');
// });
app.get('/', (req, res) => {
    res.json([
      {
          courseId: "1",
          title: "Learn TypeScript",
          subtitle: "A comprehensive guide to TypeScript",
          duration: "5 hours",
          language: "English",
          category: "Programming",
          Platform: "Udemy",
          courseContent: "Introduction, Basics, Advanced Topics",
          courseContentLink: "http://example.com/typescript-course",
          imageUrl: "http://example.com/images/typescript.png"
      },
      {
          courseId: "1",
          title: "Learn TypeScript",
          subtitle: "A comprehensive guide to TypeScript",
          duration: "5 hours",
          language: "English",
          category: "Programming",
          Platform: "Udemy",
          courseContent: "Introduction, Basics, Advanced Topics",
          courseContentLink: "http://example.com/typescript-course",
          imageUrl: "http://example.com/images/typescript.png"
      }
  ])
    console.log([
      {
          courseId: "1",
          title: "Learn TypeScript",
          subtitle: "A comprehensive guide to TypeScript",
          duration: "5 hours",
          language: "English",
          category: "Programming",
          Platform: "Udemy",
          courseContent: "Introduction, Basics, Advanced Topics",
          courseContentLink: "http://example.com/typescript-course",
          imageUrl: "http://example.com/images/typescript.png"
      },
      {
          courseId: "1",
          title: "Learn TypeScript",
          subtitle: "A comprehensive guide to TypeScript",
          duration: "5 hours",
          language: "English",
          category: "Programming",
          Platform: "Udemy",
          courseContent: "Introduction, Basics, Advanced Topics",
          courseContentLink: "http://example.com/typescript-course",
          imageUrl: "http://example.com/images/typescript.png"
      }
  ])
  })
// Start the server



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
