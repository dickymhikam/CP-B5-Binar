import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import { TrashFill } from "react-bootstrap-icons";

import "../../styles/Admin/ModalTambahKelas.css";
import { getClassForUpdate, updateCourse } from "../../services/apiAdmin";

const ModalUbahKelas = (props) => {
  const [kodeKelas, setKodeKelas] = useState("");

  useEffect(() => {
    if (props.data) {
      setKodeKelas(props.data);
    }
  }, [props.data]);

  const [chapters, setChapters] = useState([
    {
      chapterCode: "",
      chaptertitle: "",
      videoResponseData: [
        { videoCode: "", judulVideo: "", linkVideo: "", isPremium: false },
      ],
    },
  ]);

  const [chapterForms, setChapterForms] = useState([
    {
      chapterCode: "",
      chaptertitle: "",
      videoResponseData: [
        { videoCode: "", judulVideo: "", linkVideo: "", isPremium: false },
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
    newChapterForms[chapterIndex].videoResponseData[videoIndex] = {
      ...newChapterForms[chapterIndex].videoResponseData[videoIndex],
      [name]: newValue,
    };
    setChapterForms(newChapterForms);
  };

  const addChapter = () => {
    const lastChapterIndex = chapters.length - 1;
    if (
      formData.chapterResponses &&
      lastChapterIndex < formData.chapterResponses.length &&
      formData.chapterResponses[lastChapterIndex]?.chaptertitle !== ""
    ) {
      const newChapter = {
        chapterCode: "",
        chaptertitle: "",
        videoResponseData: [
          {
            videoCode: "",
            judulVideo: "",
            linkVideo: "",
            isPremium: false,
          },
        ],
      };
      setChapters((prevChapters) => [...prevChapters, newChapter]);
      setChapterForms((prevChapterForms) => [...prevChapterForms, newChapter]);
    }
  };

  const addVideo = (chapterIndex) => {
    setChapters((prevChapters) => {
      const updatedChapters = [...prevChapters];
      const currentChapter = updatedChapters[chapterIndex];
      if (
        currentChapter &&
        currentChapter.videoResponseData &&
        currentChapter.videoResponseData.length ===
          chapterForms[chapterIndex]?.videoResponseData.length
      ) {
        const newVideo = {
          videoCode: "",
          judulVideo: "",
          linkVideo: "",
          isPremium: false,
        };
        currentChapter.videoResponseData.push(newVideo);
      }
      return updatedChapters;
    });

    setChapterForms((prevChapterForms) => {
      const updatedChapterForms = [...prevChapterForms];
      const currentChapterForm = updatedChapterForms[chapterIndex];
      if (
        currentChapterForm &&
        currentChapterForm.videoResponseData &&
        currentChapterForm.videoResponseData.length ===
          chapterForms[chapterIndex]?.videoResponseData.length
      ) {
        updatedChapterForms[chapterIndex] = {
          ...currentChapterForm,
          videoResponseData: [
            ...currentChapterForm.videoResponseData,
            {
              videoCode: "",
              judulVideo: "",
              linkVideo: "",
              isPremium: false,
            },
          ],
        };
      }
      return updatedChapterForms;
    });
  };

  const removeChapter = (chapterIndex) => {
    const newChapters = chapters.filter((_, index) => index !== chapterIndex);
    setChapters(newChapters);
  };

  const removeVideo = (chapterIndex, videoIndex) => {
    setChapters((prevChapters) => {
      const newChapters = [...prevChapters];
      newChapters[chapterIndex] = {
        ...newChapters[chapterIndex],
        videoResponseData: newChapters[chapterIndex].videoResponseData.filter(
          (_, index) => index !== videoIndex
        ),
      };
      return newChapters;
    });
    setChapterForms((prevChapterForms) => {
      const newChapterForms = [...prevChapterForms];
      newChapterForms[chapterIndex] = {
        ...newChapterForms[chapterIndex],
        videoResponseData: newChapterForms[
          chapterIndex
        ].videoResponseData.filter((_, index) => index !== videoIndex),
      };
      return newChapterForms;
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("tokenAdmin");
      const courseData = {
        namaKelas: formData.namaKelas,
        kategori: formData.kategori,
        kodeKelas: kodeKelas,
        tipeKelas: formData.tipeKelas,
        level: formData.level,
        harga: formData.harga,
        materi: formData.materi,
        chapterResponses: chapterForms,
      };
      await updateCourse(token, kodeKelas, courseData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (props.data && !formData.namaKelas) {
          const data = await getClassForUpdate(props.data);
          setFormData(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [props.data, formData.namaKelas]);

  useEffect(() => {
    if (formData && formData.chapterResponses) {
      const newChapterForms = [];
      formData.chapterResponses.forEach((chapter, i) => {
        newChapterForms.push({
          chapterCode: chapter.chapterCode,
          chaptertitle: chapter.chaptertitle,
          videoResponseData: [...chapter.videoResponseData],
        });
        if (i !== formData.chapterResponses.length - 1) {
          addChapter();
          for (
            let j = 0;
            j < formData.chapterResponses[i + 1].videoResponseData.length;
            j++
          ) {
            addVideo(i + 1);
          }
        }
      });
      setChapterForms(newChapterForms);
    }
  }, [formData.chapterResponses]);

  useEffect(() => {
    if (formData.chapterResponses) {
      const initialChapters = formData.chapterResponses.map((chapter) => ({
        chapterCode: chapter.chapterCode,
        chaptertitle: chapter.chaptertitle,
        videoResponseData: [...chapter.videoResponseData],
      }));
      setChapters(initialChapters);
    }
  }, [formData.chapterResponses]);

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
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="namaKelas">
            <Form.Label>Nama Kelas</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nama Kelas"
              name="namaKelas"
              className="form-modal-admin"
              value={formData?.namaKelas}
              onChange={handleInputChange}
              maxLength={100}
            />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="exampleForm.ControlSelect1">
            <Form.Label>Kategori</Form.Label>
            <Form.Control
              as="select"
              placeholder="Kategori"
              name="kategori"
              className="form-modal-admin"
              value={formData?.kategori}
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
              name="kodeKelas"
              className="form-modal-admin"
              value={kodeKelas}
              disabled
              maxLength={10}
            />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="exampleForm.ControlSelect2">
            <Form.Label>Tipe Kelas</Form.Label>
            <Form.Control
              as="select"
              placeholder="Tipe Kelas"
              name="tipeKelas"
              className="form-modal-admin"
              value={formData?.tipeKelas}
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
              name="level"
              className="form-modal-admin"
              value={formData?.level}
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
              name="harga"
              className="form-modal-admin"
              value={formData?.harga}
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
              value={formData?.materi}
              onChange={handleInputChange}
              maxLength={1000}
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
                  controlId="exampleForm.ControlInput5"
                >
                  <Form.Label>Chapter Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={`Chapter ${chapterIndex + 1} - Title`}
                    name="chaptertitle"
                    className="form-modal-admin"
                    value={chapterForms[chapterIndex]?.chaptertitle || ""}
                    onChange={(event) =>
                      handleChapterInputChange(event, chapterIndex)
                    }
                    maxLength={30}
                  />
                </Form.Group>
                <Accordion defaultActiveKey="0">
                  {chapter &&
                    chapter.videoResponseData.map((video, videoIndex) => (
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
                              name="judulVideo"
                              className="form-modal-admin"
                              value={
                                chapterForms[chapterIndex]?.videoResponseData?.[
                                  videoIndex
                                ]?.judulVideo || ""
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
                              name="linkVideo"
                              className="form-modal-admin"
                              value={
                                chapterForms[chapterIndex]?.videoResponseData?.[
                                  videoIndex
                                ]?.linkVideo || ""
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
                              name="isPremium"
                              className="form-modal-admin"
                              value={
                                chapterForms[chapterIndex]?.videoResponseData?.[
                                  videoIndex
                                ]?.isPremium || false
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
                          <Button
                            className="btn-hapus-video mx-auto"
                            onClick={() =>
                              removeVideo(chapterIndex, videoIndex)
                            }
                          >
                            Hapus Video
                          </Button>
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

export default ModalUbahKelas;
