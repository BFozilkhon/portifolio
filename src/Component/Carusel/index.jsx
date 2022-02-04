import React from 'react'
import ReactElasticCarousel from 'react-elastic-carousel'
import { Flex, Item, Square, Img, Text, Container, Img_text, Img_card } from './style'
import img from '../../assets/icons/Group.png'

export default function Carusel() {
  return (
    <Container>

      <ReactElasticCarousel
        autoPlaySpeed={1500}
        itemsToShow={1}
        renderPagination={({ pages, activePage, onClick }) => {
          return (
            <Flex direction="row">
              {pages.map(page => {
                const isActivePage = activePage === page
                return (
                  <Square
                    key={page}
                    onClick={() => onClick(page)}
                    active={isActivePage}
                  />
                )
              })}
            </Flex>
          )
        }}
      >
        <Item>
          <Img_card>
            <Img src={img} />
            <Img_text>
              <p>Ronalad RIcherd </p>
              <p>Prodecur Menejer</p>
            </Img_text>
          </Img_card>
          <Text>
            <p>Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.</p>
          </Text>
        </Item>
        <Item>
          <Img_card>
            <Img src={img} />
            <Img_text>
              <p>Ronalad RIcherd </p>
              <p>Prodecur Menejer</p>
            </Img_text>
          </Img_card>
          <Text>
            <p>Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.</p>
          </Text>
        </Item>
        <Item>
          <Img_card>
            <Img src={img} />
            <Img_text>
              <p>Ronalad RIcherd </p>
              <p>Prodecur Menejer</p>
            </Img_text>
          </Img_card>
          <Text>
            <p>Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.</p>
          </Text>
        </Item>
      </ReactElasticCarousel>

    </Container>
  )
}


