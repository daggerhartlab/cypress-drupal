<?php

namespace Drupal\custom_node_models\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\custom_node_models\Model\NodeArticle;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Returns responses for Custom Models routes.
 */
class ExamplesController extends ControllerBase {

  /**
   * The entity type manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * The controller constructor.
   *
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entity_type_manager
   *   The entity type manager.
   */
  public function __construct(EntityTypeManagerInterface $entity_type_manager) {
    $this->entityTypeManager = $entity_type_manager;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('entity_type.manager')
    );
  }

  /**
   * Builds the response.
   */
  public function build() {

    $nodes = $this->entityTypeManager->getStorage('node')->loadByProperties([
      'uid' => 1,
    ]);
    dsm($nodes);

    foreach ($nodes as $node) {
      if ($node instanceof NodeArticle) {
        dsm($node->getImageUrl());
      }
    }

    $build['content'] = [
      '#type' => 'item',
      '#markup' => $this->t('It works!'),
    ];

    return $build;
  }

}
