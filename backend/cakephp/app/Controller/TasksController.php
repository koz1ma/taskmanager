<?php
App::uses('AppController', 'Controller');
/**
 * Tasks Controller
 *
 * @property Task $Task
 * @property PaginatorComponent $Paginator
 */
class TasksController extends AppController {

/**
 * Components
 *
 * @var array
 */
	public $components = array('RequestHandler');

/**
 * index method
 *
 * @return void
 */

	public function index() {
		$this->Task->recursive = 0;
        $tasks = $this->Task->find('all',array('order' => 'priority'));
        $this->set(array(
            'tasks' => $tasks,
            '_serialize' => array('tasks')
        ));
    }

/**
 * add method
 *
 * @return void
 */

    public function add() {
        $this->Task->create();
        if ($this->Task->save($this->request->data)) {
            $message = 'Tarefa Salva';
        } else {
            $message = 'Falha ao salvar tarefa';
        }
        $this->set(array(
            'message' => $message,
            '_serialize' => array('message')
        ));
    }

/**
 * edit method
 *
 * @throws NotFoundException
 * @param string $id
 * @return void
 */

	public function edit($id = null) {
        $this->Task->id = $id;
        if ($this->Task->save($this->request->data)) {
            $message = 'Tarefa Editada';
        } else {
            $message = 'Falha ao editar tarefa';
        }
        $this->set(array(
            'message' => $message,
            '_serialize' => array('message')
        ));
    }

/**
 * delete method
 *
 * @throws NotFoundException
 * @param string $id
 * @return void
 */

	public function delete($id) {
        if ($this->Task->delete($id)) {
            $message = 'Tarefa Excluida';
        } else {
            $message = 'Falha ao excluir tarefa';
        }
        $this->set(array(
            'message' => $message,
            '_serialize' => array('message')
        ));
    }
}
