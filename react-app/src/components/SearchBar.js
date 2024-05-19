import { useState } from "react";
import { Link } from "react-router-dom";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import './css/font.css';

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: 350,
  padding: '2px 4px',
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[3],
  backgroundColor: theme.palette.background.paper,
  transition: 'box-shadow 0.3s',
  '&:hover': {
    boxShadow: theme.shadows[6],
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  flex: 1,
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(1.25),
  color: theme.palette.primary.main,
  transition: 'color 0.3s',
  '&:hover': {
    color: theme.palette.primary.dark,
  },
}));

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <StyledPaper component="form">
      <StyledInputBase
        placeholder="Search Web3 Wiki3dia"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <StyledIconButton
        type="button"
        aria-label="search"
        component={Link}
        to={`/ListView?search=${inputValue}`}
      >
        <SearchIcon />
      </StyledIconButton>
    </StyledPaper>
  );
};

export default SearchBar;