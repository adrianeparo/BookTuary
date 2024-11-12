import React, { useState } from "react";
import {
  User,
  CaretDown,
  Plus,
  PencilSimple,
  Bookmark,
  Trash,
  GearSix,
  Info,
  SignOut,
  UsersThree,
  Bell,
  CaretLeft,
} from "phosphor-react";
import { motion, AnimatePresence } from "framer-motion";
import Usuariophoto from "../../assets/user.jpg";
import {
  Container,
  Sbar,
  Head,
  Imagem,
  UserDetails,
  P1,
  Name,
  Navegacao,
  Menu,
  Menudois,
  Menutres,
  BotaoPerfil,
  BotaoSub,
  SubMenu,
  All,
  Overlay,
  Modal,
  ModalButton,
  ModalInput,
  EditInput,
  ActionButton,
  RotatedCaret, 
} from "./style.js";

function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newListName, setNewListName] = useState("");
  const [lists, setLists] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setNewListName("");
  };

  const handleCreateList = () => {
    if (newListName.trim()) {
      setLists([...lists, newListName]);
      setNewListName("");
      closeModal();
    }
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditedName(lists[index]);
  };

  const cancelEditing = () => {
    setEditingIndex(null);
    setEditedName("");
  };

  const saveEdit = (index) => {
    const updatedLists = [...lists];
    updatedLists[index] = editedName;
    setLists(updatedLists);
    cancelEditing();
  };

  const deleteList = (index) => {
    const updatedLists = lists.filter((_, i) => i !== index);
    setLists(updatedLists);
  };

  const toggleSidebar = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <All>
      <Container>
        <Sbar>
          <Head>
            <Imagem>
              <img src={Usuariophoto} alt="User" />
            </Imagem>
            <UserDetails>
              <P1>Leitor</P1>
              <Name>Albert Camus</Name>
            </UserDetails>
          </Head>
          <Navegacao>
            <Menu>
              <p>Principal</p>
              <ul>
                <li>
                  <BotaoPerfil to="/perfil">
                    <User size={20} />
                    <span>Perfil</span>
                  </BotaoPerfil>
                </li>

                <li>
                  <BotaoPerfil to="/perfil">
                  <Bell size={24} />
                    <span>Notificações</span>
                  </BotaoPerfil>
                </li>

                <li>
                  <BotaoPerfil to="/perfil">
                  <UsersThree size={24} />
                    <span>Amigos</span>
                  </BotaoPerfil>
                </li>

                <li>
                  <BotaoPerfil onClick={() => handleToggle(0)}>
                    <Bookmark size={20} />
                    <span>Listas</span>
                    <RotatedCaret size={16} isActive={activeIndex === 0} />
                  </BotaoPerfil>
                  <AnimatePresence>
                    {activeIndex === 0 && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <SubMenu>
                          <ul>
                            <li>
                              <BotaoSub onClick={openModal}>
                                <span>Criar nova lista</span>
                                <Plus size={16} />
                              </BotaoSub>
                            </li>
                            {lists.map((list, index) => (
                              <li key={index}>
                                {editingIndex === index ? (
                                  <div>
                                    <EditInput
                                      type="text"
                                      value={editedName}
                                      onChange={(e) =>
                                        setEditedName(e.target.value)
                                      }
                                    />
                                    <ActionButton
                                      onClick={() => saveEdit(index)}
                                    >
                                      Salvar
                                    </ActionButton>
                                    <ActionButton onClick={cancelEditing}>
                                      Cancelar
                                    </ActionButton>
                                  </div>
                                ) : (
                                  <BotaoSub>
                                    <span>{list}</span>
                                    <PencilSimple
                                      size={16}
                                      onClick={() => startEditing(index)}
                                    />
                                    <Trash
                                      size={16}
                                      onClick={() => deleteList(index)}
                                    />
                                  </BotaoSub>
                                )}
                              </li>
                            ))}
                          </ul>
                        </SubMenu>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              </ul>
            </Menu>

            <Menudois>
              <p>Config.</p>
              <ul>
                <li>
                  <BotaoPerfil onClick={() => handleToggle(1)}>
                    <GearSix size={20} />
                    <span>Configurações</span>
                    <RotatedCaret size={16} isActive={activeIndex === 1} />
                  </BotaoPerfil>
                  <AnimatePresence>
                    {activeIndex === 1 && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <SubMenu>
                          <ul>
                            <li>
                              <BotaoSub to="/configuracoes/perfil">
                                <span>Minha Conta</span>
                              </BotaoSub>
                            </li>
                            <li>
                              <BotaoSub to="/configuracoes/seguranca">
                                <span>Segurança</span>
                              </BotaoSub>
                            </li>
                          </ul>
                        </SubMenu>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              </ul>
            </Menudois>

            <Menutres>
              <p>Conta</p>
              <ul>
                <li>
                  <BotaoPerfil to="#">
                    <Info size={20} />
                    <span>Ajuda</span>
                  </BotaoPerfil>
                </li>
                <li>
                  <BotaoPerfil to="/">
                    <SignOut size={20} />
                    <span>Sair</span>
                  </BotaoPerfil>
                </li>
              </ul>
            </Menutres>
          </Navegacao>
        </Sbar>
      </Container>

      {showModal && (
        <>
          <Overlay onClick={closeModal} />
          <Modal>
            <h2>Criar Nova Lista</h2>
            <ModalInput
              type="text"
              placeholder="Nome da lista"
              value={newListName}
              onChange={(e) => setNewListName(e.target.value)}
            />
            <ModalButton onClick={handleCreateList}>Criar Lista</ModalButton>
          </Modal>
        </>
      )}
    </All>
  );
}

export default Sidebar;
