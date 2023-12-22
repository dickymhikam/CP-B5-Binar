import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import { TrashFill } from "react-bootstrap-icons";

import "../../styles/Admin/ModalTambahKelas.css";

const ModalUbahKelas = (props) => {
  const [chapters, setChapters] = useState([
    { title: "", videos: [{ title: "", link: "", premium: "FREE" }] },
  ]);

  const addVideo = (chapterIndex) => {
    const newChapters = [...chapters];
    newChapters[chapterIndex].videos.push({
      title: "",
      link: "",
      premium: "FREE",
    });
    setChapters(newChapters);
  };

  const addChapter = () => {
    const newChapters = [
      ...chapters,
      { title: "", videos: [{ title: "", link: "", premium: "FREE" }] },
    ];
    setChapters(newChapters);
  };

  const handleChapterTitleChange = (event, index) => {
    const newChapters = [...chapters];
    newChapters[index].title = event.target.value;
    setChapters(newChapters);
  };

  const handleVideoTitleChange = (event, chapterIndex, videoIndex) => {
    const newChapters = [...chapters];
    newChapters[chapterIndex].videos[videoIndex].title = event.target.value;
    setChapters(newChapters);
  };

  const handleVideoLinkChange = (event, chapterIndex, videoIndex) => {
    const newChapters = [...chapters];
    newChapters[chapterIndex].videos[videoIndex].link = event.target.value;
    setChapters(newChapters);
  };

  const handlePremiumChange = (event, chapterIndex, videoIndex) => {
    const newChapters = [...chapters];
    newChapters[chapterIndex].videos[videoIndex].premium = event.target.value;
    setChapters(newChapters);
  };

  const removeVideo = (chapterIndex, videoIndex) => {
    const newChapters = [...chapters];
    newChapters[chapterIndex].videos.splice(videoIndex, 1);
    setChapters(newChapters);
  };

  const removeChapter = (chapterIndex) => {
    const newChapters = chapters.filter((_, index) => index !== chapterIndex);
    setChapters(newChapters);
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
          Ubah Kelas
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-admin">
        <Form>
          <Form.Group className="mb-3" controlId="namaKelas">
            <Form.Label>Nama Kelas</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nama Kelas"
              autoFocus
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
            <Form.Label>Kategori</Form.Label>
            <Form.Control
              type="text"
              placeholder="Kategori"
              autoFocus
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
            <Form.Label>Upload Gambar Kelas</Form.Label>
            <Form.Control
              type="file"
              placeholder="Kategori"
              autoFocus
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
            <Form.Label>Kode Kelas</Form.Label>
            <Form.Control
              type="text"
              placeholder="Kode Kelas"
              autoFocus
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
            <Form.Label>Tipe Kelas</Form.Label>
            <Form.Control
              type="text"
              placeholder="Tipe Kelas"
              autoFocus
              className="form-modal-admin"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
            <Form.Label>Level</Form.Label>
            <Form.Control as="select" autoFocus className="form-modal-admin">
              <option value="BEGINNER">Beginner</option>
              <option value="INTERMEDIATE">Intermediate</option>
              <option value="ADVANCED">Advanced</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
            <Form.Label>Harga</Form.Label>
            <Form.Control
              type="text"
              placeholder="Harga"
              autoFocus
              className="form-modal-admin"
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
              className="form-modal-admin-materi"
            />
          </Form.Group>
          {chapters.map((chapter, chapterIndex) => (
            <div className="chapter-wrapper mb-3" key={chapterIndex}>
              <div className="container p-4">
                <div className="d-flex justify-content-end">
                <TrashFill
                  className="text-danger me-0"
                  onClick={() => removeChapter(chapterIndex)}
                />
                </div>
                <Form.Group
                  className="mb-3"
                  controlId={`chapterTitle-${chapterIndex}`}
                >
                  <Form.Label>Chapter Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={`Chapter ${chapterIndex + 1} - Pendahuluan`}
                    autoFocus
                    className="form-modal-admin"
                    value={chapter.title}
                    onChange={(event) =>
                      handleChapterTitleChange(event, chapterIndex)
                    }
                  />
                </Form.Group>
                <Accordion defaultActiveKey="0">
                  {chapter.videos.map((video, videoIndex) => (
                    <Accordion.Item
                      key={videoIndex}
                      eventKey={videoIndex.toString()}
                    >
                      <Accordion.Header>{`Video ${
                        videoIndex + 1
                      }`}</Accordion.Header>
                      <Accordion.Body className="mb-0">
                        <Form.Group className="mb-3">
                          <Form.Label>Judul Video</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Judul Video"
                            autoFocus
                            className="form-modal-admin"
                            value={video.title}
                            onChange={(event) =>
                              handleVideoTitleChange(
                                event,
                                chapterIndex,
                                videoIndex
                              )
                            }
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Link Video</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Link Video"
                            autoFocus
                            className="form-modal-admin"
                            value={video.link}
                            onChange={(event) =>
                              handleVideoLinkChange(
                                event,
                                chapterIndex,
                                videoIndex
                              )
                            }
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Premium</Form.Label>
                          <Form.Control
                            as="select"
                            autoFocus
                            className="form-modal-admin"
                            value={video.premium}
                            onChange={(event) =>
                              handlePremiumChange(
                                event,
                                chapterIndex,
                                videoIndex
                              )
                            }
                          >
                            <option value="PREMIUM">Premium</option>
                            <option value="FREE">Free</option>
                          </Form.Control>
                        </Form.Group>
                        <Button className="btn-hapus-video mx-auto" onClick={() => removeVideo(chapterIndex, videoIndex)}>Hapus Video</Button>
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
            <Button onClick={props.onHide} className="btn-simpan">
              Simpan
            </Button>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer className="modal-footer-admin"></Modal.Footer>
    </Modal>
  );
};

export default ModalUbahKelas;