import { useState } from 'react'
import { Flex, Card, Button } from 'theme-ui'
import { Link } from 'react-router-dom'
import { Nav as Menu } from '../../components/Nav/Nav'

import productImage1 from '../../assets/images/product_1.png'
import productImage2 from '../../assets/images/product_2.png'
import productImage3 from '../../assets/images/product_3.png'
import productImage4 from '../../assets/images/product_4.png'

const products = [
  {
    id: 1,
    name: 'Xbox Control',
    image: productImage1,
  },
  {
    id: 2,
    name: 'Polaroid',
    image: productImage2,
  },
  {
    id: 3,
    name: 'Sun Glasses',
    image: productImage3,
  },
  {
    id: 4,
    name: 'Headphones',
    image: productImage4,
  },
]

export const ProductsList = () => {
  const [productSelected, setProductSelected] = useState<number | null>(null)

  return (
    <>
      <Menu />
      <Flex sx={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '100vh' }}>
        <Flex
          p={3}
          sx={{
            borderRadius: 'sm',
            border: '1px solid',
            borderColor: 'primary',
            flexWrap: 'wrap',
            maxWidth: 800,
            justifyContent: 'center',
          }}
        >
          <h2>Select your Product</h2>
          <Flex>
            {products.map((product) => (
              <Card
                sx={{
                  p: 2,
                  m: 2,
                  border: '1px solid',
                  borderColor: 'primary',
                  cursor: 'pointer',
                  borderRadius: 24,
                  backgroundColor: productSelected === product.id ? 'secondary' : 'white',
                  textAlign: 'center',
                  '&:hover': {
                    borderColor: 'tertiary',
                  },
                }}
                onClick={() => setProductSelected(product.id)}
              >
                <img
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 20,
                  }}
                  src={product.image}
                  alt={product.name}
                />
                <h3
                  style={{
                    color: productSelected === product.id ? 'white' : 'inherit',
                  }}
                >
                  {product.name}
                </h3>
              </Card>
            ))}
          </Flex>
          <Flex sx={{ mt: 4, width: '100%', justifyContent: 'flex-end' }}>
            <Link to="/user-info">
              <Button>Next</Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
