<?php

namespace Drupal\custom_node_models\Model;

use Drupal\node\Entity\Node;

class NodeArticle extends Node
{
  /**
   * Get Article image uri.
   *
   * @param bool $relative
   * @return mixed
   */
  public function getImageUrl(bool $relative = FALSE) {
    return $this->field_image->entity->createFileUrl($relative);
  }
}
