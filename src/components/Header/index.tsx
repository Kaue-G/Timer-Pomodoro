import { HeaderContainer } from './styles';
import logoIpod from '../../assets/ipod.svg';
import { Scroll, Timer } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIpod} alt="" />
      <nav>
        <NavLink to="/" title="Cronometro">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
