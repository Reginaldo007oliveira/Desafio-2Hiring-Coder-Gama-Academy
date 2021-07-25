import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import * as S from "./styled";

export default function Client(props: any) {
  const [client, setClient] = useState(props.currentClient);
  const [address, setAddress] = useState(props.currentClient.address);

  function handleClientInput(e: any): void {
    const id: string = e.target.getAttribute("id");
    const value: string = e.target.value;

    let input: object = { [id]: value };

    setClient({ ...client, ...input });
  }

  function handleAddressInput(e: any): void {
    const id: string = e.target.getAttribute("id");
    const value: string | number = e.target.value;

    let input: object = { [id]: value };

    setAddress({ ...address, ...input });
  }

  function handleSubmit(e: any): void {
    e.preventDefault();

    props.onSubmitClient({
      ...client,
      id: client.id !== "" ? client.id : uuidv4(),
      address: {
        ...address,
      },
    });
  }

  useEffect(() => {
    setClient(props.currentClient);
    setAddress(props.currentClient.address);
  }, [props.currentClient]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <S.Fieldset>
          <S.Label htmlFor="name">Nome</S.Label>
          <S.Input
            id="name"
            type="text"
            value={client.name || ""}
            onChange={handleClientInput}
          />
        </S.Fieldset>
        <S.Fieldset>
          <S.Label htmlFor="email">E-mail</S.Label>
          <S.Input
            id="email"
            type="email"
            value={client.email || ""}
            onChange={handleClientInput}
          />
        </S.Fieldset>

        <S.Fieldset>
          <S.Label htmlFor="street">Rua</S.Label>
          <S.Input
            id="street"
            type="text"
            value={address.street || ""}
            onChange={handleAddressInput}
          />
        </S.Fieldset>

        <S.Fieldset>
          <S.Label htmlFor="complement">Complemento</S.Label>
          <S.Input
            id="complement"
            type="text"
            value={address.complement || ""}
            onChange={handleAddressInput}
          />
        </S.Fieldset>
        <S.Fieldset>
          <S.Label htmlFor="neighborhood">Bairro</S.Label>
          <S.Input
            id="neighborhood"
            type="text"
            value={address.neighborhood || ""}
            onChange={handleAddressInput}
          />
        </S.Fieldset>
        <S.Fieldset>
          <S.Label htmlFor="city">Cidade</S.Label>
          <S.Input
            id="city"
            type="text"
            value={address.city || ""}
            onChange={handleAddressInput}
          />
        </S.Fieldset>
        <S.Fieldset>
          <S.Label htmlFor="state">Estado</S.Label>
          <S.Input
            id="state"
            type="text"
            value={address.state || ""}
            onChange={handleAddressInput}
          />
        </S.Fieldset>

        <S.ButtonContainer>
          <S.ButtonSubmit type="submit">Enviar</S.ButtonSubmit>
        </S.ButtonContainer>
      </form>
    </>
  );
}
