import ClasssComponent from "./components/ClassComponent";
import JsxComponent from "./components/JsxComponent";
import PostFunc from "./components/PostFunc/PostFunc";

const posts = [
    {
        id: 'p1',
        title: 'Colorfull',
        date: '06/01/2024',
        image:'https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg',
        
    },

    {
        id:'p2',
        title:'Sunset',
        date:'08/25/2024',
        image:'https://images.pexels.com/photos/355508/pexels-photo-355508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id:'p3',
        title:'Japan',
        date:'09/07/2024',
        image:'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
    }, 
    {
        id:'p4',
        title:'Lake',
        date:'09/07/2024',
        image:'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
    }, 
    {
        id:'p5',
        title:'Tree',
        date:'09/07/2024',
        image:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736881_640.jpg',
    }, 
    {
        id:'p6',
        title:'Mountain',
        date:'09/07/2024',
        image:'https://iso.500px.com/wp-content/uploads/2015/12/top.jpg',
    }, 
    {
        id:'p7',
        title:'Clouds',
        date:'09/07/2024',
        image:'https://t3.ftcdn.net/jpg/06/83/73/14/360_F_683731413_onTsSjYOOguf9Ueob9YJpguqleZtgeqG.jpg',
    }, 
    {
        id:'p8',
        title:'Butterfly',
        date:'09/07/2024',
        image:'https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-butterfly-wings-wallpaper-best-wallpapers-for-your-desktop-images-of-image_2906279.jpg',
    }, 
    {
        id:'p9',
        title:'Italy',
        date:'09/07/2024',
        image:'https://worldtravelfamily.com/wp-content/uploads/2021/07/best-places-to-visit-in-europe-.jpg',
    }, 
    {
        id:'p10',
        title:'Golden Gate',
        date:'09/07/2024',
        image:'https://assets.cityexperiences.com/wp-content/uploads/2022/06/Golden-Gate-SF-1024x701.jpg',
    }, 
    {
        id:'p11',
        title:'Leaf',
        date:'09/07/2024',
        image:'https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg',
    }, 

]

export default function App() {
  return (
    <div>
        {/* <JsxComponent /> */}
        <ClasssComponent/>
        <PostFunc title={posts[0].title} date={posts[0].date} image={posts[0].image}/>
        <PostFunc title={posts[1].title} date={posts[1].date} image={posts[1].image}/>
        <PostFunc title={posts[2].title} date={posts[2].date} image={posts[2].image}/>
        <PostFunc title={posts[3].title} date={posts[3].date} image={posts[3].image}/>
        <PostFunc title={posts[4].title} date={posts[4].date} image={posts[4].image}/>
        <PostFunc title={posts[5].title} date={posts[5].date} image={posts[5].image}/>
        <PostFunc title={posts[6].title} date={posts[6].date} image={posts[6].image}/>
        <PostFunc title={posts[7].title} date={posts[7].date} image={posts[7].image}/>
        <PostFunc title={posts[8].title} date={posts[8].date} image={posts[8].image}/>
        <PostFunc title={posts[9].title} date={posts[9].date} image={posts[9].image}/>
        <PostFunc title={posts[10].title} date={posts[10].date} image={posts[10].image}/>

      
        
       
    </div>
  )
}
