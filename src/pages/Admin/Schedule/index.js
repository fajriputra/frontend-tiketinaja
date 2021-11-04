import React from "react";

import Sponsor1 from "assets/images/sponsor/logo-ebvid.png";
import Sponsor2 from "assets/images/sponsor/logo-cineone.png";
import Sponsor3 from "assets/images/sponsor/logo-hiflix.png";

import Card from "components/Card";
import Header from "components/Header";
import CrudImage from "parts/Admin/CrudMovie/CrudImage";
import Sitelink from "components/Sitelink";
import InputSelect from "components/UI/Form/InputSelect";
import Image from "components/Image";
import Button from "components/UI/Button";

import ScheduleForm from "parts/Admin/CrudSchedule/ScheduleForm";
// import Pagination from "components/Pagination";

import "./schedule.scss";

export default function Schedule(props) {
  // const [showInput, setShowInput] = useState(false)

  // setShowInput = true
  // showInput ? input : button

  return (
    <>
      <Header {...props} className="mb-0" />
      <section className="schedule">
        <div className="container">
          <h5 className="content__heading">Form Schedule</h5>
          <Card className="crud__card--schedule">
            <div className="d-flex">
              <CrudImage />

              <div className="w-100">
                <ScheduleForm />
              </div>
            </div>
          </Card>

          <div className="data__schedule--head">
            <h5 className="content__heading pb-0">Data Schedule</h5>
            <InputSelect className="form__input select ms-auto me-3" />
            <InputSelect className="form__input select me-3" />
            <InputSelect className="form__input select" />
          </div>

          <Card className="card__data--schedule">
            <Card className="card__schedule--content">
              <div className="card__schedule--head">
                <Image
                  className="data__schedule--image"
                  srcImage={Sponsor1}
                  altImage="Sponsor Image"
                  imgClass="img-cover"
                />

                <div className="data__schedule__text">
                  <h5 className="data__schedule__text--title">Ebv.id</h5>
                  <p className="data__schedule__text--subtitle">
                    Jakarta Timur
                  </p>
                </div>
              </div>
              <hr className="line w-100" />

              <div className="data__schedule__time">
                <div className="data__schedule__time--content">
                  <Button className="btn time__schedules p-0">08:30am</Button>
                </div>
                <div className="data__schedule__time--content">
                  <Button className="btn time__schedules p-0">08:30am</Button>
                </div>
                <div className="data__schedule__time--content">
                  <Button className="btn time__schedules p-0">08:30am</Button>
                </div>
                <div className="data__schedule__time--content">
                  <Button className="btn time__schedules p-0">08:30am</Button>
                </div>
                <div className="data__schedule__time--content">
                  <Button className="btn time__schedules p-0">08:30am</Button>
                </div>
                <div className="data__schedule__time--content">
                  <Button className="btn time__schedules p-0">08:30am</Button>
                </div>
              </div>

              <div className="data__schedule--price">
                <p className="data__schedule--text">Price</p>
                <p className="data__schedule--seat">30000</p>
              </div>

              <div className="d-flex align-items-center">
                <Button className="btn btn__admin update w-100 me-3">
                  Update
                </Button>
                <Button className="btn btn__admin delete w-100 ">Delete</Button>
              </div>
            </Card>
          </Card>
        </div>
      </section>
      {/* <Pagination /> */}
      <Sitelink />
    </>
  );
}
