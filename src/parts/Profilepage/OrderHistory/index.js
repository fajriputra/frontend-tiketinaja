import React, { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";
import { useSelector, useDispatch } from "react-redux";
import axios from "helpers/axios";

import ebvid from "assets/images/sponsor/logo-ebvid.png";
import cineone21 from "assets/images/sponsor/logo-cineone.png";
import hiflix from "assets/images/sponsor/logo-hiflix.png";

import { formatDate } from "helpers/formatDate";
import { formatAMPM } from "helpers/formatTime";
import Card from "components/Card";
import Image from "components/Image";
import Button from "components/UI/Button";

import "./order-history.scss";

export default function OrderHistory(props) {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  const [dataBooking, setDataBooking] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`booking/user-id/${userData.id}`)
      .then((res) => {
        setDataBooking(res.data.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch, userData.id]);

  return (
    <Card
      className={`card__order--history ${
        dataBooking.length > 3 ? "morethan-3" : ""
      } `}
    >
      {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <BounceLoader color="#5f2eea" />
        </div>
      ) : dataBooking.length > 0 ? (
        dataBooking.map((item) => {
          return (
            <div
              className="wrapper-history"
              style={{ marginBottom: 30 }}
              key={item.id}
            >
              <div className="order__history--content">
                <div className="order__history--head">
                  <h5 className="order__history--title">
                    {formatDate(item.dateBooking)} -{" "}
                    {formatAMPM(item.timeBooking.slice(0, 5))}
                  </h5>
                  <p className="order__history--subtitle">{item.name}</p>
                </div>
                <Image
                  className="order__history--cinema"
                  srcImage={
                    item.premier === "CineOne21"
                      ? cineone21
                      : item.premier === "ebv.id"
                      ? ebvid
                      : item.premier === "hiflix Cinema"
                      ? hiflix
                      : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                  }
                  altImage="Sponsor Brand"
                  imgClass="img-cover"
                />
              </div>
              <hr className="line w-100" />

              <div className="button__wrapper">
                <Button
                  className={`btn btn__ticket ${
                    item.statusTicket === "inProcess"
                      ? "not-paid"
                      : item.statusTicket === "notActive"
                      ? "not-used"
                      : item.statusTicket === "Active"
                      ? "used"
                      : ""
                  }`}
                >
                  {item.statusTicket === "inProcess"
                    ? "Waiting Payment"
                    : item.statusTicket === "notActive"
                    ? "Ticket in Active"
                    : item.statusTicket === "Active"
                    ? "Ticket used"
                    : ""}
                </Button>
                {item.statusPayment === "success" && (
                  <Button
                    className="btn p-0 show"
                    type="link"
                    href={`/ticket/${item.id}`}
                  >
                    See ticket
                  </Button>
                )}
              </div>
            </div>
          );
        })
      ) : (
        <h5 className="d-flex justify-content-center align-items-center text-center">
          You don't have order history yet
        </h5>
      )}
    </Card>
  );
}
