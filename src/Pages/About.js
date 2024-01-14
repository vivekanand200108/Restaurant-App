import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
        <Box sx={{
          mt:5,
          mb:15,
          p:2,
          textAlign:"center",
          "& h4":{
            fontFamily:"sans-serif",
            fontSize:"2rem",
            fontWeight:"bold"
          },
          "@media (max-width:600px)":{
            mb:-2,
            "& h4":{
              fontSize:"1.5rem"
            }
          }

        }}>
          <Typography variant="h4">Welcome to my Resturant</Typography>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse itaque dignissimos eum a. Recusandae autem, dolorum reprehenderit quidem obcaecati culpa consequatur placeat laudantium in, ratione illo veniam saepe repellat libero expedita iste. Vitae, eaque. Facilis quisquam voluptates, modi tenetur voluptate nam! Enim odit, omnis modi voluptatum velit amet vero ex, nulla officiis doloribus, necessitatibus sapiente alias neque vel! Inventore eos natus fuga magnam voluptate excepturi, blanditiis delectus corporis fugiat neque dicta porro veritatis minus ad. Et maiores nemo explicabo odit cupiditate iusto, laboriosam rem perspiciatis accusantium sint, pariatur distinctio quibusdam? Suscipit ducimus nobis voluptate, velit ex optio, aliquid necessitatibus non expedita nemo doloremque. Nemo dolorum error incidunt, voluptatum, fugit unde temporibus recusandae ipsa accusantium, harum excepturi ullam. Enim corrupti molestiae illum dicta iusto praesentium, eaque fugiat tenetur quidem provident libero fuga tempore nisi animi, accusamus quas quia ab sit modi expedita, est accusantium assumenda nemo earum. Ratione, repellat eius ex voluptate necessitatibus, eaque enim possimus obcaecati nesciunt voluptatum a esse tempora neque quia quos eos suscipit quam ducimus exercitationem saepe sunt sed. Ducimus soluta laboriosam error repudiandae, odio, cumque numquam aspernatur eveniet nihil dolorum magni ut aliquam fugiat deserunt iusto suscipit eaque vero mollitia inventore ab blanditiis. Excepturi, molestiae voluptatum.</p>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis veniam quos consectetur ipsa, sapiente atque aliquid maxime ut incidunt beatae earum eius rem, consequatur placeat id quod adipisci accusamus quasi quam, ullam tempore. Numquam facilis, culpa ipsum ullam ut voluptatibus minus impedit odio nesciunt nemo vitae qui reiciendis quibusdam, praesentium non ipsam. Quidem, eligendi error. Nisi, necessitatibus. Enim sapiente consequatur optio reiciendis temporibus? Laboriosam laborum nobis tempora quo voluptatibus deleniti ex voluptas deserunt molestiae iusto est ducimus minima sapiente, saepe ratione in dignissimos libero numquam recusandae architecto omnis nam. Sit debitis perferendis aspernatur? Blanditiis saepe, libero, cum exercitationem eius consequatur laboriosam beatae earum molestias expedita facere id debitis voluptate impedit molestiae illum sapiente iure ipsa, deserunt reiciendis et. A temporibus culpa sit suscipit nam iste veniam voluptatem ex officia id quod vitae, sapiente dolor porro magnam, dolorum ipsa odit! A minima odit consequatur adipisci in est aperiam explicabo illum ullam corrupti sequi, exercitationem nam magnam dolorum ratione, debitis veritatis dolor et laboriosam maiores earum? Voluptas vitae at distinctio exercitationem, minima natus beatae debitis facilis amet doloremque nostrum soluta. Fuga accusamus veniam dicta a, laboriosam aspernatur repellat animi, at molestiae, soluta suscipit ratione necessitatibus cum totam iste porro? Cumque tenetur reiciendis illum debitis atque? Rerum, neque voluptate odit reprehenderit saepe esse id facilis natus corporis alias ullam iste, earum praesentium amet adipisci quis obcaecati non dolores repudiandae reiciendis, blanditiis laborum? Harum at distinctio voluptas, laborum veritatis aut, maxime, quod dicta nobis omnis quis aspernatur ipsam. Tenetur earum ex, id enim voluptatem velit autem nulla est accusamus nihil minus adipisci unde ad aliquid natus molestias fugit inventore quaerat ipsa nam. Provident atque ipsa, ducimus voluptatum iure sed aliquam maiores. Corporis neque iure sed omnis blanditiis officia animi laborum, sit commodi consequuntur, dolor, voluptate et recusandae doloribus ut! Accusantium maiores asperiores ipsam impedit.</p>
        </Box>
    </Layout>
  )
}

export default About