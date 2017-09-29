import React, { Component } from 'react';
import { ScrollView, Platform} from 'react-native';
import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';
import { colors } from '../util/constants';

const tabIcon = 27;


const Root = styled(Touchable).attrs({
    feedback: 'none'
})`
    flex: 1;
`
const Title = styled.View`
    alignItems: center;
    padding: 10px;
    width: 100%;
    backgroundColor: ${props => props.theme.WHITE};
    shadowColor: ${props => props.theme.GRAY777};
    shadowOffset: 0px 2px;
    shadowRadius: 2;
    shadowOpacity: 0.1;
    elevation: 2;
`;
const TitleText = styled.Text`
    color: ${colors.PINK800};
    fontSize: 18;
    fontFamily: sspRegular
`;
const ListContainer = styled.View`
    width: 100%;
    marginTop: 40
`;
const ItemContainer = styled(Touchable).attrs({
    feedback: 'opacity',
    hitSlot: {top: 15, bottom: 15, right: 15, left: 15}
})`
    height: 60;
    flexDirection: row;
    alignItems: center;
    backgroundColor: ${props => props.theme.WHITE};
`;
const ItemContainerIcon = styled.View`
    flex: 0.2;
    alignSelf: stretch;
    alignItems: center;
    justifyContent: center;
`;
const Separator = styled.View`
    alignSelf: flex-end;
    width: 85%;
    borderBottomWidth: 0.6;
    borderBottomColor: ${props => props.theme.GRAY600RGBA};
`;
const ItemContainerText = styled.View`
    flex: 1;
`;
const ItemText = styled.Text`
    color: ${colors.GRAY600};
    fontSize: ${Platform.OS === 'ios' ? 15 : 13};
    fontWeight: ${Platform.OS === 'ios' ? 400 : 300 };
`;
const ArrowContainer = styled(Touchable).attrs({
    feedback: 'opacity',
    hitSlot: {top: 15, bottom: 15, right: 15, left: 15}
})`
    flex: 0.1;
`

class HowScreen extends Component {
    state = {  }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Root>
                {/* <LogoContainer>
                    <Logo source={require('../../assets/logokity.png')}/>
                </LogoContainer> */}
                <Title>
                    <TitleText>KityPlancho Ayuda</TitleText>
                </Title>
                <ScrollView>
                <ListContainer>
                    <ItemContainer onPress={() =>
                            navigate('InfoScreen', { name: 'Mi primer pedido', text: `Realizar pedidos en KityPlancho es muy sencillo, una vez adquirido una cuenta e iniciado sesión comienzas seleccionado uno de nuestros servicios en la pantalla principal, para luego elegir aquellas prendas las cuales desees que nosotros nos hagamos cargo.
Una vez que has añadido al cesto todas las prendas deseadas, solo dinos a que parte pasamos por tu ropa y si así lo deseas también a donde te la entregamos en caso de ser un lugar diferente. Nuestro personal gestionará tu pedido y si todo está correcto enviará personal a la dirección que nos facilites para que el mismo recoja tu ropa. 
Podrás visualizar el estatus de tu pedido con los indicadores de color en la sección de Mis pedidos.`})}
                            >
                        <ItemContainerIcon>
                            <Entypo name="emoji-happy" size={Platform.OS === 'ios' ? tabIcon : 23} color={colors.PRIMARY}/>
                        </ItemContainerIcon>
                        <ItemContainerText>
                            <ItemText>Mi primer pedido</ItemText>
                        </ItemContainerText>
                        <ArrowContainer>
                            <Entypo name="chevron-small-right" size={27} color={colors.GRAY600}/> 
                        </ArrowContainer>
                    </ItemContainer>
                    <Separator />
                    <ItemContainer onPress={() =>
                            navigate('InfoScreen', { name: 'Estatus de pedido', text: `Existen seis estados de pedido, mismos que ayudan en la administración de los mismos. Estos son representados de manera visual a través de colores.
                            
Significa que el estatus del pedido inicio desde la aplicación móvil y requiere de una autorización para que el rutero pueda realizar su trabajo.
                            
Es el estatus que refleja que el pedido fue gestionado y autorizado por el administrador. También es el estatus inicial de los pedidos elaborados desde la aplicación web.
                            
Refleja que el pedido fue autorizado y recolectado por el rutero y en estos momentos se encuentra siendo atendido dentro de la sucursal.
                            
Una vez terminado el servicio el estatus de refleja de este color advirtiendo que ha sido atendido y está listo para ser entregado por el rutero o en la misma sucursal.
                            
Indica que el proceso ha concluido exitosamente y que la ropa fue entregada al cliente satisfactoriamente.
                            
En ocasiones se puede presentar situaciones en las que los pedidos deben ser marcados como no atendidos. Dentro de estas situaciones se pueden encontrar que el cliente canceló un pedido, el administrador encuentra poca seriedad en los pedidos de ese cliente, el pedido está fuera del alcance territorial o que la sucursal puede estar temporal o definitivamente cerrada. Para apreciarlo de forma visible se le otorga este color.
                            
Así mismo en cualquiera de los anteriores casos se apoya con un pequeño mensaje al colocar el puntero sobre estos colores. Mismo que funciona en navegadores de computadoras y en algunos teléfonos móviles, esto depende del navegador utilizado y su versión.`})}
                            >
                        <ItemContainerIcon>
                            <Entypo name="controller-record" size={Platform.OS === 'ios' ? tabIcon : 23} color={colors.PRIMARY}/>
                        </ItemContainerIcon>
                        <ItemContainerText>
                            <ItemText>Estatus de pedido</ItemText>
                        </ItemContainerText>
                        <ArrowContainer>
                            <Entypo name="chevron-small-right" size={27} color={colors.GRAY600}/> 
                        </ArrowContainer>
                    </ItemContainer>
                    <Separator />
                    <ItemContainer onPress={() =>
                            navigate('InfoScreen', { name: 'Estatus de pedido', text: `Las sucursales de KityPlancho mantienen un horario de servicio corrido de 8:00am a 8:00pm, por tanto el servicio de colecta y entrega se adapta a este mismo, estando sujeto a cambios sin previo aviso por carga laboral. 
Para cualquier aclaración comunícate a los teléfonos y/o correo electrónico brindados en Contáctanos.`})}
                            >
                        <ItemContainerIcon>
                            <Ionicons name="md-time" size={Platform.OS === 'ios' ? tabIcon : 23} color={colors.PRIMARY}/>
                        </ItemContainerIcon>
                        <ItemContainerText>
                            <ItemText>Horario de recogida/entrega</ItemText>
                        </ItemContainerText>
                        <ArrowContainer>
                            <Entypo name="chevron-small-right" size={27} color={colors.GRAY600}/> 
                        </ArrowContainer>
                    </ItemContainer>
                    <Separator />
                    <ItemContainer onPress={() =>
                            navigate('InfoScreen', { name: 'Disponibilidad por ubicación', text: `Actualmente KityPlancho labora dentro de La Mancha urbana de la ciudad de Durango Mx. por tanto, facilitamos todos nuestros servicios que se encuentren dentro de la misma.
¿Te gustaría que KityPlancho estuviera en tu ciudad? Háznoslo saber a través de los medios brindados en Contáctanos.`})}
                            >
                        <ItemContainerIcon>
                            <MaterialCommunityIcons name="map-marker-radius" size={Platform.OS === 'ios' ? tabIcon : 23} color={colors.PRIMARY}/> 
                        </ItemContainerIcon>
                        <ItemContainerText>
                            <ItemText>Disponibilidad por ubicación</ItemText>
                        </ItemContainerText>
                        <ArrowContainer>
                            <Entypo name="chevron-small-right" size={27} color={colors.GRAY600}/> 
                        </ArrowContainer>
                    </ItemContainer>
                    <Separator />
                    <ItemContainer onPress={() =>
                            navigate('InfoScreen', { name: 'Garantía KityPlancho', text: `¡En KityPlancho lo hacemos con amor! Sí, nos encanta servirte y hacerte sentir mejor liberándote de algunas de las tareas del hogar. Es por ello que transformamos tu confianza en seguridad para tus prendas y nos aseguramos que las tengas de vuelta con lo mejor de nosotros.`})}
                            >
                        <ItemContainerIcon>
                            <Ionicons name="md-heart" size={Platform.OS === 'ios' ? tabIcon : 23} color={colors.PRIMARY}/> 
                        </ItemContainerIcon>
                        <ItemContainerText>
                            <ItemText>Garantía KityPlancho</ItemText>
                        </ItemContainerText>
                        <ArrowContainer>
                            <Entypo name="chevron-small-right" size={27} color={colors.GRAY600}/> 
                        </ArrowContainer>
                    </ItemContainer>
                    <Separator />
                    <ItemContainer onPress={() =>
                            navigate('InfoScreen', { name: 'Contáctanos', text: `Teléfono: (618) 123 45 67 \n Web: www.kityplancho.com \n E-mail: kityplancho@gmail.com`})}
                            >
                        <ItemContainerIcon>
                            <Ionicons name="md-contacts" size={Platform.OS === 'ios' ? tabIcon : 23} color={colors.PRIMARY}/> 
                        </ItemContainerIcon>
                        <ItemContainerText>
                            <ItemText>Contáctanos</ItemText>
                        </ItemContainerText>
                        <ArrowContainer>
                            <Entypo name="chevron-small-right" size={27} color={colors.GRAY600}/> 
                        </ArrowContainer>
                    </ItemContainer>
                    <Separator />
                </ListContainer>
                </ScrollView>
            </Root>
        );
    }
}

export default HowScreen;