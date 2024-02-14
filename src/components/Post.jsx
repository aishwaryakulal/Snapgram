// import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
// import {
//   Avatar,
//   Card,
//   CardActions,
//   CardContent,
//   CardHeader,
//   CardMedia,
//   Checkbox,
//   IconButton,
//   Typography,
// } from "@mui/material";
// const Post = () => {
//   return (
//     <Card sx={{ margin: 5 }}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVert />
//           </IconButton>
//         }
//         title="Aishwarya"
//         subheader="September 18, 2022"
//       />
//       <CardMedia
//         component="img"
//         height="20%"
//         //image="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//         //image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2F853995148079761398%2F&psig=AOvVaw10R2r5xy8xxOU5JhQwXFaP&ust=1707990643024000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKCiho7HqoQDFQAAAAAdAAAAABAE"
//         image="https://chasingdaisiesblog.com/wp-content/uploads/2022/04/39deb0c246f0b81d977571dc8a47b5ec.jpg"
//         alt="Paella dish"
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//           This impressive paella is a perfect party dish and a fun meal to cook
//           together with your guests. Add 1 cup of frozen peas along with the
//           mussels, if you like.
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <Checkbox
//             icon={<FavoriteBorder />}
//             checkedIcon={<Favorite sx={{ color: "red" }} />}
//           />
//         </IconButton>
//         <IconButton aria-label="share">
//           <Share />
//         </IconButton>
//       </CardActions>
//     </Card>
//   );
// };

// export default Post;


import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";

const posts = [
  {
    id: 1,
    author: "Aishwarya",
    date: "September 18, 2022",
    image: "https://media.istockphoto.com/id/949472768/photo/tiger-portrait.jpg?s=612x612&w=0&k=20&c=cPI-hIwXxLwRYcGW3HaC_3C6J_MMIE_BbMjI9Ac0XNE=",
    content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  // Add more posts as needed
  {
    id: 2,
    author: "Shreya",
    date: "September 11, 2022",
    image: "https://www.istockphoto.com/resources/images/PhotoFTLP/P2-FEB-iStock-1217787639.jpg",
    content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    id: 3,
    author: "Sush",
    date: "September 18, 2022",
    image: "https://media.istockphoto.com/id/489272417/photo/cat-and-dog-sitting-together.jpg?s=612x612&w=0&k=20&c=fc5QMPfrxsmC6seeCp-O-KcwNgUIsXu4md3xAGq-Iww=",
    content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    id: 4,
    author: "Raveena",
    date: "September 18, 2022",
    image: "https://media.istockphoto.com/id/177435810/photo/young-punk-gang-hanging-out-behind-an-abandoned-urban-building.jpg?s=612x612&w=0&k=20&c=vyYGJOEZmHIytEMGgqXIVnQeFlpg5tiBprpSih-97lc=",
    content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    id: 5,
    author: "Sana",
    date: "September 18, 2022",
    image: "https://media.istockphoto.com/id/1281612523/photo/diwali-selfie.jpg?s=612x612&w=0&k=20&c=LtS51I1eMKRC9DNXGDc9J632Snqq9gBut1nQ89ovMQw=",
    content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    id: 6,
    author: "Anvitha",
    date: "September 18, 2022",
    image: "https://media.istockphoto.com/id/1045833086/photo/beauty-in-saree.jpg?s=612x612&w=0&k=20&c=xfpCm9pNDcJ3RWx9YMOFEZujYU1nJpCZdVaq5eo-1Q4=",
    content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    id: 7,
    author: "Yashass",
    date: "September 18, 2022",
    image: "https://media.istockphoto.com/id/1857115209/photo/young-woman-with-smart-glasses-and-a-gun-on-the-street-at-night.jpg?s=612x612&w=0&k=20&c=ET5Nexpn3LgnKX3OKEn4ABiSFY9zdG423XhfrAA3kH0=",
    content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    id: 8,
    author: "Likki",
    date: "September 18, 2022",
    image: "https://media.istockphoto.com/id/1176789549/photo/handsome-gentleman-downtown.jpg?s=612x612&w=0&k=20&c=ay4JQ4nu09orMCyWSY4AiZ0VZKYs29_zDXvqREG9lgg=",
    content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    id: 9,
    author: "Nikhil",
    date: "September 18, 2022",
    image: "https://media.istockphoto.com/id/1150469938/photo/profile-side-view-portrait-of-her-she-nice-cute-lovely-lovable-adorable-fascinating-feminine.jpg?s=612x612&w=0&k=20&c=Y-73JAPpubBqj9cy5zGJalr3KTpvItxs4kOGlQcWno0=",
    content: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },

];

const Post = () => {
  return (
    <div>
      {posts.map((post) => (
        <Card key={post.id} sx={{ margin: 5 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                {post.author.charAt(0)}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title={post.author}
            subheader={post.date}
          />
          <CardMedia
            component="img"
            height="20%"
            image={post.image}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {post.content}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
              />
            </IconButton>
            <IconButton aria-label="share">
              <Share />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default Post;
