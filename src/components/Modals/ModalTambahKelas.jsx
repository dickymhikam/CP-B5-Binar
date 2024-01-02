import { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import { TrashFill } from "react-bootstrap-icons";

import "../../styles/Admin/ModalTambahKelas.css";
import { createCourse } from "../../services/apiAdmin";

const ModalTambahKelas = (props) => {
  const [chapters, setChapters] = useState([
    {
      chaptertitle: "",
      insertVideoRequests: [
        { judulVideo: "", linkVideo: "", isPremium: false },
      ],
    },
  ]);

  const [chapterForms, setChapterForms] = useState([
    {
      chaptertitle: "",
      insertVideoRequests: [
        { judulVideo: "", linkVideo: "", isPremium: false },
      ],
    },
  ]);

  const [formData, setFormData] = useState({
    namaKelas: "",
    kategori: "",
    kodeKelas: "",
    tipeKelas: "",
    level: "",
    harga: 0,
    materi: "",
  });

  const handleChapterInputChange = (event, chapterIndex) => {
    const { name, value } = event.target;
    const newChapterForms = [...chapterForms];
    newChapterForms[chapterIndex] = {
      ...newChapterForms[chapterIndex],
      [name]: value,
    };
    setChapterForms(newChapterForms);
  };

  const handleVideoInputChange = (event, chapterIndex, videoIndex) => {
    const { name, value } = event.target;
    const newValue =
      name === "isPremium" ? event.target.value === "true" : value;

    const newChapterForms = [...chapterForms];
    newChapterForms[chapterIndex].insertVideoRequests[videoIndex] = {
      ...newChapterForms[chapterIndex].insertVideoRequests[videoIndex],
      [name]: newValue,
    };
    setChapterForms(newChapterForms);
  };

  const addChapter = () => {
    setChapters([
      ...chapters,
      {
        chaptertitle: "",
        insertVideoRequests: [
          { judulVideo: "", linkVideo: "", isPremium: false },
        ],
      },
    ]);

    setChapterForms([
      ...chapterForms,
      {
        chaptertitle: "",
        insertVideoRequests: [
          { judulVideo: "", linkVideo: "", isPremium: false },
        ],
      },
    ]);
  };

  const addVideo = (chapterIndex) => {
    const newChapters = [...chapters];
    const newChapterForms = [...chapterForms];
    const updatedChapter = { ...newChapters[chapterIndex] };

    updatedChapter.insertVideoRequests.push({
      judulVideo: "",
      linkVideo: "",
      isPremium: false,
    });

    newChapters[chapterIndex] = updatedChapter;

    const updatedChapterForm = { ...newChapterForms[chapterIndex] };

    updatedChapterForm.insertVideoRequests.push({
      judulVideo: "",
      linkVideo: "",
      isPremium: false,
    });

    newChapterForms[chapterIndex] = updatedChapterForm;

    setChapters(newChapters);
    setChapterForms(newChapterForms);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("tokenAdmin");

      const courseData = {
        namaKelas: formData.namaKelas,
        kategori: formData.kategori,
        kodeKelas: formData.kodeKelas,
        tipeKelas: formData.tipeKelas,
        level: formData.level,
        harga: formData.harga,
        materi: formData.materi,
        chapterInsertRequests: chapterForms,
      };
      await createCourse(token, courseData);
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-form-wrapper"
    >
      <Modal.Header
        closeButton
        className="modal-header-admin flex-column-reverse"
      >
        <Modal.Title id="contained-modal-title-vcenter" className="text-center">
          Tambah Kelas
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-admin">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="namaKelas">
            <Form.Label>Nama Kelas</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nama Kelas"
              autoFocus
              name="namaKelas"
              className="form-modal-admin"
              value={formData.namaKelas}
              onChange={handleInputChange}
              maxLength={100}
            />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="exampleForm.ControlSelect1">
            <Form.Label>Kategori</Form.Label>
            <Form.Control
              as="select"
              placeholder="Kategori"
              autoFocus
              name="kategori"
              className="form-modal-admin"
              value={formData.kategori}
              onChange={(event) => handleInputChange(event)}
            >
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Web Development">Web Development</option>
              <option value="Android Development">Android Development</option>
              <option value="Data Science">Data Science</option>
              <option value="Business Intelligence">
                Business Intelligence
              </option>
              <option value="IOS Development">IOS Development</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput3">
            <Form.Label>Kode Kelas</Form.Label>
            <Form.Control
              type="text"
              placeholder="Kode Kelas"
              autoFocus
              name="kodeKelas"
              className="form-modal-admin"
              value={formData.kodeKelas}
              onChange={handleInputChange}
              maxLength={10}
            />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="exampleForm.ControlSelect2">
            <Form.Label>Tipe Kelas</Form.Label>
            <Form.Control
              as="select"
              placeholder="Tipe Kelas"
              autoFocus
              name="tipeKelas"
              className="form-modal-admin"
              value={formData.tipeKelas}
              onChange={(event) => handleInputChange(event)}
            >
              <option value="PREMIUM">Premium</option>
              <option value="FREE">Gratis</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlSelect3">
            <Form.Label>Level</Form.Label>
            <Form.Control
              as="select"
              placeholder="Level Kelas"
              autoFocus
              name="level"
              className="form-modal-admin"
              value={formData.level}
              onChange={(event) => handleInputChange(event)}
            >
              <option value="BEGINNER">Beginner</option>
              <option value="INTERMEDIATE">Intermediate</option>
              <option value="ADVANCED">Advanced</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput4">
            <Form.Label>Harga</Form.Label>
            <Form.Control
              type="number"
              placeholder="Harga"
              autoFocus
              name="harga"
              className="form-modal-admin"
              value={formData.harga}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 "
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Detail</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Tentang Kelas"
              name="materi"
              className="form-modal-admin-materi"
              value={formData.materi}
              onChange={handleInputChange}
              maxLength={1000}
            />
          </Form.Group>
          {chapters.map((chapter, chapterIndex) => (
            <div className="chapter-wrapper mb-3" key={chapterIndex}>
              <div className="container p-4">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput5"
                >
                  <Form.Label>Chapter Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={`Chapter ${chapterIndex + 1} - Title`}
                    autoFocus
                    name="chaptertitle"
                    className="form-modal-admin"
                    value={chapterForms[chapterIndex].chaptertitle}
                    onChange={(event) =>
                      handleChapterInputChange(event, chapterIndex)
                    }
                    maxLength={30}
                  />
                </Form.Group>
                <Accordion defaultActiveKey="0">
                  {chapter.insertVideoRequests.map((video, videoIndex) => (
                    <Accordion.Item
                      key={videoIndex}
                      eventKey={videoIndex.toString()}
                    >
                      <Accordion.Header>{`Video ${
                        videoIndex + 1
                      }`}</Accordion.Header>
                      <Accordion.Body className="mb-0">
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput6"
                        >
                          <Form.Label>Judul Video</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder={`Judul Video`}
                            autoFocus
                            name="judulVideo"
                            className="form-modal-admin"
                            value={
                              chapterForms[chapterIndex].insertVideoRequests[
                                videoIndex
                              ].judulVideo
                            }
                            onChange={(event) =>
                              handleVideoInputChange(
                                event,
                                chapterIndex,
                                videoIndex
                              )
                            }
                            maxLength={40}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput7"
                        >
                          <Form.Label>Link Video</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder={`Link Video`}
                            autoFocus
                            name="linkVideo"
                            className="form-modal-admin"
                            value={
                              chapterForms[chapterIndex].insertVideoRequests[
                                videoIndex
                              ].linkVideo
                            }
                            onChange={(event) =>
                              handleVideoInputChange(
                                event,
                                chapterIndex,
                                videoIndex
                              )
                            }
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlSelect4"
                        >
                          <Form.Label>Premium</Form.Label>
                          <Form.Control
                            as="select"
                            autoFocus
                            name="isPremium"
                            className="form-modal-admin"
                            value={
                              chapterForms[chapterIndex].insertVideoRequests[
                                videoIndex
                              ].isPremium
                            }
                            onChange={(event) =>
                              handleVideoInputChange(
                                event,
                                chapterIndex,
                                videoIndex
                              )
                            }
                          >
                            <option value={false}>Free</option>
                            <option value={true}>Premium</option>
                          </Form.Control>
                        </Form.Group>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
                <Button
                  className="btn-video mx-auto"
                  onClick={() => addVideo(chapterIndex)}
                >
                  Tambah Video
                </Button>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-between gap-2">
            <Button className="btn-chapter" onClick={addChapter}>
              Tambah Chapter
            </Button>
            <Button onClick={props.onHide} className="btn-simpan" type="submit">
              Simpan
            </Button>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer className="modal-footer-admin"></Modal.Footer>
    </Modal>
  );
};

export default ModalTambahKelas;