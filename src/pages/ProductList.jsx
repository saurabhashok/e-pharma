
import Announcement from '../components/Announcements';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Container = styled.div``

const Title = styled.h1`margin:20px;
`;

const FilterContainer = styled.div`
display:flex;
justify-content:space-between;
`;

const Filter = styled.div`
margin:20px;`

const FilterText = styled.span`
font-size:20px;
font-weight:600;
margin-right:20px;
`
const Select = styled.select`
padding:10px;
margin-right:20px;
`;

const Option = styled.option``

const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>
                        Filter Products:
                        </FilterText>
                        <Select>
                            <Option>Himalaya</Option>
                            <Option>Patanjali</Option>
                            <Option>Dettol</Option>
                            <Option>HK Vitals</Option>
                            <Option>ON Optimum Nutrition</Option>
                        </Select>
                        <Select>
                            <Option>Less  than 10%</Option>
                            <Option>10% and above</Option>
                            <Option>20% and above</Option>
                            <Option></Option>
                        </Select>
                </Filter>
                <Filter>
                    <FilterText>
                        Sort Products:
                    </FilterText>
                    <Select>
                        <Option>Relevance</Option>
                        <Option>Average customer Rating</Option>
                        <Option>Price: Low to High</Option>
                        <Option>Price: High to Low</Option>
                        <Option>Discount</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />

        </Container>
    )
}

export default ProductList