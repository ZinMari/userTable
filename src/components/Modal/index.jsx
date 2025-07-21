import { Button } from "../Button";
import { Th } from "../Th";
import { Tr } from "../Tr";
import { Td } from "../Td";

export function Modal({ handlerClose, data }) {
  const handleCloseModal = (e) => {
    if (
      e.target === e.currentTarget ||
      e.currentTarget.classList.contains("btnClose")
    ) {
      handlerClose();
    }
  };
  return (
    <div
      onClick={handleCloseModal}
      className="flex justify-center fixed inset-0 bg-slate-900/60 backdrop-blur pt-10 pb-10"
    >
      <div className="contModal inline-flex relative bg-(--gray) rounded-lg min-w-[320px] mx-auto p-[10px] max-md:flex-col">
        <div>
          <img
            src={data.image}
            alt={`The avatar of the user ${data.firstName}`}
          />
        </div>
        <table className="max-w-[100%]">
          <tbody>
            <Tr>
              <Th>Full name</Th>
              <Td>{`${data.lastName} ${data.firstName} ${data.maidenName}`}</Td>
            </Tr>
            <Tr>
              <Th>Age</Th>
              <Td>{data.age}</Td>
            </Tr>
            <Tr>
              <Th>Weight</Th>
              <Td>{data.weight}</Td>
            </Tr>
            <Tr>
              <Th>Height</Th>
              <Td>{data.height}</Td>
            </Tr>
            <Tr>
              <Th>Phone</Th>
              <Td>{data.phone}</Td>
            </Tr>
            <Tr>
              <Th>Email</Th>
              <Td>{data.email}</Td>
            </Tr>
            <Tr>
              <Th>Address</Th>
              <Td>{data.address.address}</Td>
            </Tr>
            <Tr>
              <Th>State</Th>
              <Td>{data.address.state}</Td>
            </Tr>
            <Tr>
              <Th>StateCode</Th>
              <Td>{data.address.stateCode}</Td>
            </Tr>
            <Tr>
              <Th>City</Th>
              <Td>{data.address.city}</Td>
            </Tr>
            <Tr>
              <Th>Postal Code</Th>
              <Td>{data.address.postalCode}</Td>
            </Tr>
            <Tr>
              <Th>Coordinates</Th>
              <Td>{`lat: ${data.address.coordinates.lat} lng: ${data.address.coordinates.lng}`}</Td>
            </Tr>
            <Tr>
              <Th>Country</Th>
              <Td>{data.address.country}</Td>
            </Tr>
          </tbody>
        </table>
        <Button
          className={"btnClose absolute top-0 left-[calc(100%+10px)]"}
          handleClick={handleCloseModal}
        />
      </div>
    </div>
  );
}
