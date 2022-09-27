// import Container from 'components/Container';
// import { SearchForm, Input, Button, Wrapper } from './Search.styled';
// import { FcSearch } from 'react-icons/fc';
// import { faechApiMovie } from '../../components/service/faechAPI';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useState } from 'react';

// const Search = () => {
//   const [valueInput, setValueInput] = useState('');
//   const [data, setData] = useState(null);

//   const handleSubmit = e => {
//     e.preventDefault();
//     faechApiMovie(valueInput, Number(pageNew)).then(setData);
//   };
//   const handleChange = e => {
//     return setValueInput(e.target.value);
//   };
//   return (
//     <>
//       <Container>
//         <Wrapper>
//           <SearchForm onSubmit={handleSubmit}>
//             <Input
//               onChange={handleChange}
//               type="text"
//               autoComplete="off"
//               autoFocus
//               placeholder="Search movies"
//               value={valueInput}
//             />
//             <Button type="submit">
//               <FcSearch />
//             </Button>
//           </SearchForm>
//         </Wrapper>
//       </Container>
//     </>
//   );
// };

// export default Search;
