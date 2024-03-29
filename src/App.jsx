
import React, {useEffect, useState} from 'react'
import axios from 'axios'

import { Routes, Route,  useLocation} from "react-router-dom";
import useFetch from "./hooks/useFetch";
import {   Homepage, HumourPage, PersonalityPage, ImaginationPage, HumourContentPage, PersonalityContentPage, BloggPage, BloggContentPage, ImaginationContentPage, VideoContentPage, VideoPage, PodcastPage, PodcastContentPage, AboutPage, CoolStuffPage, LandingPage, NewsletPage, Search} from "./pages";
import NotFoundpage from "./pages/NotFoundpage";
import myImage from "./Asset 1.png"
import { About, Animate, AnimateContent, Loader, MailChimp, Modal, Questionnaire } from "./component";
import CategoryPage from './pages/CategoryPage';
// import { Loader } from './component';
// import AboutPage from "./pages/AboutPage";
// import { Routes, Route } from "react-router-dom";

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const [loading, setLoading] = useState(true);

      useEffect(() => {
        // Simulate loading data
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }, []);
      
  const [reallData, setreallData] = useState([])

  const [reallDatai, setreallDatai] = useState([])
  const [reallDatap, setreallDatap] = useState([])
  const [reallDatab, setreallDatab] = useState([])
  const [reallDatav, setreallDatav] = useState([])
  const [reallDatapo, setreallDatapo] = useState([])
  const [reallDatac, setreallDatac] = useState([])
  const [reallAbout, setreallAbout] = useState([])
  



    // const url = 'http://localhost:1337/api/humours?populate=*';
    const url = 'https://whatisthe411-backend.onrender.com/api/humours?populate=*';

    useEffect(() => {


      getData()
    }, [])
    const getData = () =>{
        axios.get(url).then(res =>setreallData(res.data.data)).catch(err =>{console.log(err);})
    }
    console.log(reallData);


    
    // const url1 = 'http://localhost:1337/api/imaginations?populate=*';
    const url1 = 'https://whatisthe411-backend.onrender.com/api/imaginations?populate=*';

    useEffect(() => {
      getDat()
    }, [])
    const getDat = () =>{
        axios.get(url1).then(res =>setreallDatai(res.data.data)).catch(err =>{console.log(err);})
    }
    console.log(reallDatai);

    // const url2 = 'http://localhost:1337/api/personalities?populate=*';
    const url2 = 'https://whatisthe411-backend.onrender.com/api/personalities?populate=*';

    useEffect(() => {
      getDatp()
    }, [])
    const getDatp = () =>{
        axios.get(url2).then(res =>setreallDatap(res.data.data)).catch(err =>{console.log(err);})
    }
    console.log(reallDatap);


    // const url3 = 'http://localhost:1337/api/blogs?populate=*';
    const url3 = 'https://whatisthe411-backend.onrender.com/api/blogs?populate=*';

    useEffect(() => {
      getDatb()
    }, [])
    const getDatb = () =>{
        axios.get(url3).then(res =>setreallDatab(res.data.data)).catch(err =>{console.log(err);})
    }
    console.log(reallDatab);

    // const url4 = 'http://localhost:1337/api/videos?populate=*';
    const url4 = 'https://whatisthe411-backend.onrender.com/api/videos?populate=*';

    useEffect(() => {
      getDatv()
    }, [])
    const getDatv = () =>{
        axios.get(url4).then(res =>setreallDatav(res.data.data)).catch(err =>{console.log(err);})
    }
    console.log(reallDatav);


    // const url5 = 'http://localhost:1337/api/podcasts?populate=*';
    const url5 = 'https://whatisthe411-backend.onrender.com/api/podcasts?populate=*';

    useEffect(() => {
      getDatpo()
    }, [])
    const getDatpo = () =>{
        axios.get(url5).then(res =>setreallDatapo(res.data.data)).catch(err =>{console.log(err);})
    }
    console.log(reallDatapo);

    // const url5 = 'http://localhost:1337/api/podcasts?populate=*';
    const url6 = 'https://whatisthe411-backend.onrender.com/api/carousels?populate=*';

    useEffect(() => {
      getDatc()
    }, [])
    const getDatc = () =>{
        axios.get(url6).then(res =>setreallDatac(res.data.data)).catch(err =>{console.log(err);})
    }
    console.log(reallDatac);


    // const url5 = 'http://localhost:1337/api/podcasts?populate=*';
    const url7 = 'https://whatisthe411-backend.onrender.com/api/abouts?populate=*';

    useEffect(() => {
      getAbout()
    }, [])
    const getAbout = () =>{
        axios.get(url7).then(res =>setreallAbout(res.data.data)).catch(err =>{console.log(err);})
    }
    console.log(reallAbout);

    const handleSearch = (term) => {
      setSearchTerm(term);
    };

  // const { loading: blogLoading, data: blogData, error: blogError } = useFetch(
  //   "https://four11admin.onrender.com/api/blogs?populate=*",
  //   {},
  //   []
  // );

  // const { loading: firstblogLoading, data: firstblogData, error: firstblogError } = useFetch(
  //   "https://four11admin.onrender.com/api/firstblogs?populate=*",
  //   {},
  //   []
  // );

  const allData = [...reallData].reverse();
  const allDatai = [...reallDatai].reverse();
  const allDatap = [...reallDatap].reverse();
  const allDatab = [...reallDatab].reverse();
  const allDatav = [...reallDatav].reverse();
  const allDatapo = [...reallDatapo].reverse();
  const allDatac = [...reallDatac].reverse();
  const allAbout = [...reallAbout].reverse();

  

  // if (blogLoading || firstblogLoading )
  //   return (
     
  //     <section className="bg-blue-900 relative place-items-center grid h-screen w-screen gap-4">
  //       <div className="bg-blue-500 w-48 h-48  absolute animate-ping rounded-full delay-5s shadow-xl"></div>

  //       <div className="bg-blue-400 w-32 h-32 absolute animate-ping rounded-full shadow-xl"></div>

  //       <div className="bg-white w-24 h-24 absolute animate-pulse rounded-full shadow-xl"></div>

  

  //       <img src={myImage} className="w-20 h-20" alt="" />
  //     </section>
  //   );
  // if (blogError  || firstblogError) return <p>Error</p>;
  //     console.log(blogData);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
    
     {loading ?  <Loader/> : <h1></h1>}
    
     
    
    {/* {!allData.length? <section className="bg-blue-900 relative place-items-center grid h-screen w-screen gap-4">
        <div className="bg-blue-500 w-48 h-48  absolute animate-ping rounded-full delay-5s shadow-xl"></div>

        <div className="bg-blue-400 w-32 h-32 absolute animate-ping rounded-full shadow-xl"></div>

        <div className="bg-white w-24 h-24 absolute animate-pulse rounded-full shadow-xl"></div>

       

        
      </section>: */}
        
    <Routes>

        
  
        <Route path="/search" element={<Search allData={allData} allDatai={allDatai} allDatap={allDatap} allDatab={allDatab} allDatapo={allDatapo} allDatav={allDatav} allDatac={allDatac}/>} />

        <Route path="/" element={<LandingPage allData={allData} allDatab={allDatab}/>} />
        <Route path="/home" element={<Homepage allData={allData} allDatai={allDatai} allDatap={allDatap} allDatab={allDatab} allDatapo={allDatapo} allDatav={allDatav} allDatac={allDatac}/>} />
        
        <Route path="/blog" element={<BloggPage allData={allData} allDatai={allDatai} allDatap={allDatap} allDatab={allDatab} allDatapo={allDatapo} allDatav={allDatav} allDatac={allDatac}/>} />
        
        <Route path="/blog/:id" element={<BloggContentPage allData={allData} allDatai={allDatai} allDatap={allDatap} allDatab={allDatab} allDatapo={allDatapo} allDatav={allDatav} allDatac={allDatac}/>} />


        <Route path="/humour" element={<HumourPage allData={allData} allDatai={allDatai} allDatap={allDatap} allDatab={allDatab} allDatapo={allDatapo} allDatav={allDatav} allDatac={allDatac}/>}/>
        <Route path="/humour/:id" element={<HumourContentPage allData={allData} allDatai={allDatai} allDatap={allDatap} allDatab={allDatab} allDatapo={allDatapo} allDatav={allDatav} allDatac={allDatac}/>}/>
        <Route path="/questionnaire" element={<Questionnaire/>} />


        <Route path="/personality" element={<PersonalityPage allData={allData} allDatai={allDatai} allDatap={allDatap} allDatab={allDatab} allDatapo={allDatapo} allDatav={allDatav} allDatac={allDatac}/>}/>
        <Route path="/personality/:id" element={<PersonalityContentPage allData={allData} allDatai={allDatai} allDatap={allDatap} allDatab={allDatab} allDatapo={allDatapo} allDatav={allDatav} allDatac={allDatac}/>}/>
        


        <Route path="/imagination" element={<ImaginationPage allData={allData} allDatai={allDatai} allDatap={allDatap} allDatab={allDatab} allDatapo={allDatapo} allDatav={allDatav} allDatac={allDatac}/>}/>
        <Route path="/imagination/:id" element={<ImaginationContentPage allData={allData} allDatai={allDatai} allDatap={allDatap} allDatab={allDatab} allDatapo={allDatapo} allDatav={allDatav} allDatac={allDatac}/>}/>



        <Route path="/video" element={<VideoPage allData={allData} allDatai={allDatai} allDatap={allDatap} allDatab={allDatab} allDatapo={allDatapo} allDatav={allDatav} allDatac={allDatac}/>}/>
        <Route path="/video/:id" element={<VideoContentPage allData={allData} allDatai={allDatai} allDatap={allDatap} allDatab={allDatab} allDatapo={allDatapo} allDatav={allDatav} allDatac={allDatac}/>}/>


        <Route path="/podcast" element={<PodcastPage allData={allData} allDatai={allDatai} allDatap={allDatap} allDatab={allDatab} allDatapo={allDatapo} allDatav={allDatav} allDatac={allDatac}/>}/>
        <Route path="/podcast/:id" element={<PodcastContentPage allData={allData} allDatai={allDatai} allDatap={allDatap} allDatab={allDatab} allDatapo={allDatapo} allDatav={allDatav} allDatac={allDatac}/>}/>


        <Route path="/about" element={<AboutPage allAbout={allAbout}/>}/>


        <Route path="/cool-stuff" element={<CoolStuffPage  allData={allData} allDatai={allDatai} allDatap={allDatap} allDatab={allDatab} allDatapo={allDatapo} allDatav={allDatav} allDatac={allDatac}/>}/>

        

        <Route path="/category" element={<CategoryPage/>}/>
        <Route path="/newsletter" element={<NewsletPage/>}/>



        <Route path="/*" element={<NotFoundpage/>}/>
        <Route path="/mail" element={<MailChimp/>}/>
        
        
        
   
        
        
        
        
        </Routes>
   <Modal/>
      
    </>
  );
}
